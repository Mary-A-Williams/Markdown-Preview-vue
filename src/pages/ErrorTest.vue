<script setup lang="ts">
// Immediately throw an error to test ErrorBoundary
throw new Error('Test Error!');
</script>

<template>
  <!-- This will never render because the error is thrown on mount -->
  <div>ErrorTest Component</div>
</template>
