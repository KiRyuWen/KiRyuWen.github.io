<template>
  <section class="p-8 max-w-2xl mx-auto">
    <template v-if="project">
      <router-link to="/projects" class="text-sm opacity-60 hover:opacity-100 mb-6 inline-block">← back to projects</router-link>
      <h1 class="text-3xl mb-3">{{ project.name }}</h1>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tag in project.tags" :key="tag" class="text-xs border border-white/30 px-2 py-1">{{ tag }}</span>
      </div>
      <p class="mb-8 leading-relaxed opacity-80">{{ project.description }}</p>
      <div class="flex gap-4">
        <a v-if="project.github" :href="project.github" target="_blank" class="border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-colors">GitHub</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="border border-white/40 px-4 py-2 hover:bg-white hover:text-black transition-colors">Live Demo</a>
      </div>
    </template>
    <template v-else>
      <p class="opacity-60">Project not found.</p>
      <router-link to="/projects" class="mt-4 inline-block hover:opacity-100 opacity-60">← back to projects</router-link>
    </template>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
</script>
