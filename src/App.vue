<template>
  <div class="bg-black text-white min-h-screen font-mono">
    <nav class="px-12 py-6 flex justify-between items-center text-lg border-b border-white/20">
      <router-link to="/" class="flex items-center gap-2 text-xl">
        <span>🏠</span>
        <!-- <span>home</span> -->
      </router-link>
      <div class="flex gap-10">
        <router-link to="/blog">blog</router-link>
        <router-link to="/projects">projects</router-link>
        <a href="mailto:leith9210@tamu.edu">contact</a>
        <a href="/wenyi_lo_resume_backend.pdf" target="_blank">resume</a>
      </div>
    </nav>
    <router-view />
  </div>
</template>