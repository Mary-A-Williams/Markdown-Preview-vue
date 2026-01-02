<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="logo" aria-label="Markdown Preview">
        <strong>MarkDown Preview</strong>
      </RouterLink>

      <nav aria-label="Main navigation">
        <RouterLink to="/" class="nav-link">Editor</RouterLink>
        <RouterLink to="/error-test" class="nav-link">Error Test</RouterLink>
      </nav>
    </div>
  </header>
</template>