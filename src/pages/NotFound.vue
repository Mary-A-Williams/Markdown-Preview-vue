<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="notfound-container">
    <section style="padding: 20px;">
      <h2>404 — Page not found</h2>
      <p>Oops! The page you requested does not exist.</p>
      <RouterLink to="/">Go back home</RouterLink>
    </section>
  </div>
</template>

