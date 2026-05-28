<template>
  <section class="p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl mb-8">Projects</h1>
    <div class="flex flex-col gap-4">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="border border-white/20 p-5 hover:border-white/60 transition-colors group"
      >
        <div class="flex justify-between items-start">
          <h2 class="text-lg group-hover:underline">{{ project.name }}</h2>
          <span class="text-sm opacity-40">→</span>
        </div>
        <p class="text-sm opacity-60 mt-1">{{ project.summary }}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span v-for="tag in project.tags" :key="tag" class="text-xs border border-white/20 px-2 py-0.5">{{ tag }}</span>
        </div>
      </router-link>
    </div>
    <p v-if="projects.length === 0" class="opacity-60">No projects yet.</p>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js'
</script>
