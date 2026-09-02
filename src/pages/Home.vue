<template>
    <section class="p-8 text-center">
      <h1 class="text-3xl mb-4">I'm Wen Yi Lo. You can call me Leith</h1>
      <div class="max-w-2xl mx-auto text-left text-white/80 leading-relaxed space-y-4 mb-8">
        <p>
          I'm a Master's student in Computer Science at Texas A&amp;M, looking for a backend
          Software Engineer Intern role for Summer 2027.
        </p>
        <p>
          I spent a year interning at Garmin. I built a permission-management system that
          replaced a manual approval process for a 350-person team and cut the manual work by
          over 90%. I also built an IoT prototype with Django, AWS IoT MQTT, and Java to show a
          WiFi setup could replace a US$3,000 hardware module in each vehicle.
        </p>
        <p>
          On my own, I built a course recommendation system in Go with pgvector that uses RAG
          to suggest courses by career goal.
        </p>
      </div>
      <SocialLinks />
    </section>
</template>

<script setup>
import SocialLinks from '../components/SocialLinks.vue'
</script>
