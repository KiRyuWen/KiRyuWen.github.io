<template>
  <section class="p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl mb-8">Blog</h1>
    <div class="flex flex-col gap-4">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.id}`"
        class="border border-white/20 p-5 hover:border-white/60 transition-colors group"
      >
        <div class="flex justify-between items-start gap-4">
          <h2 class="text-lg group-hover:underline">{{ post.title }}</h2>
          <span class="text-sm opacity-40 shrink-0">{{ post.date }}</span>
        </div>
        <p class="text-sm opacity-60 mt-1">{{ post.summary }}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span v-for="tag in post.tags" :key="tag" class="text-xs border border-white/20 px-2 py-0.5">{{ tag }}</span>
        </div>
      </router-link>
    </div>
    <p v-if="posts.length === 0" class="opacity-60">No posts yet.</p>
  </section>
</template>

<script setup>
import { posts } from '../data/posts/index.js'
</script>
