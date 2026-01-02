<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// State to track error
const hasError = ref(false);
const errorMessage = ref('');

// Expose default slot for child components
const props = defineProps<{ }>();

// Capture errors in children
function errorCaptured(err: unknown) {
  hasError.value = true;
  errorMessage.value = String(err);
  console.error('ErrorBoundary caught:', err);
  // prevent further propagation
  return false;
}
</script>

<template>
  <div v-if="hasError" class="error-boundary" role="alert">
    <h2>Something went wrong</h2>
    <pre style="white-space: pre-wrap">{{ errorMessage }}</pre>
    <RouterLink to="/">
      <button>Try Again</button>
    </RouterLink>
  </div>
  <div v-else v-on:errorCaptured="errorCaptured">
    <slot />
  </div>
</template>
