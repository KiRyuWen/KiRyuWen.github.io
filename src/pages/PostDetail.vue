<template>
  <section class="p-8 max-w-2xl mx-auto">
    <template v-if="post">
      <router-link to="/blog" class="text-sm opacity-60 hover:opacity-100 mb-6 inline-block">← back to blog</router-link>
      <h1 class="text-3xl mb-2">{{ post.title }}</h1>
      <p class="text-sm opacity-40 mb-4">{{ post.date }}</p>
      <div class="flex flex-wrap gap-2 mb-10">
        <span v-for="tag in post.tags" :key="tag" class="text-xs border border-white/30 px-2 py-1">{{ tag }}</span>
      </div>

      <article class="leading-relaxed">
        <template v-for="(block, i) in post.blocks" :key="i">
          <h2 v-if="block.t === 'h2'" class="text-xl mt-10 mb-3 border-b border-white/20 pb-2">{{ block.text }}</h2>

          <p v-else-if="block.t === 'p' && block.html" class="mb-4 opacity-80 [&_a]:underline [&_a]:opacity-100" v-html="block.html"></p>
          <p v-else-if="block.t === 'p'" class="mb-4 opacity-80">{{ block.text }}</p>

          <p v-else-if="block.t === 'note'" class="mb-4 border-l-2 border-white/60 pl-4 py-1 text-sm">{{ block.text }}</p>

          <ol v-else-if="block.t === 'ol'" class="list-decimal list-outside pl-6 mb-4 space-y-1 opacity-80">
            <li v-for="(item, j) in block.items" :key="j" v-html="item"></li>
          </ol>
          <ul v-else-if="block.t === 'ul'" class="list-disc list-outside pl-6 mb-4 space-y-1 opacity-80">
            <li v-for="(item, j) in block.items" :key="j" v-html="item"></li>
          </ul>

          <div v-else-if="block.t === 'code'" class="mb-6">
            <p v-if="block.label" class="text-xs opacity-50 mb-1">{{ block.label }}</p>
            <pre class="border border-white/20 p-4 overflow-x-auto text-sm bg-white/5"><code>{{ block.code }}</code></pre>
          </div>
        </template>
      </article>
    </template>
    <template v-else>
      <p class="opacity-60">Post not found.</p>
      <router-link to="/blog" class="mt-4 inline-block opacity-60 hover:opacity-100">← back to blog</router-link>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data/posts/index.js'

const route = useRoute()
const post = computed(() => posts.find(p => p.id === route.params.id))
</script>
