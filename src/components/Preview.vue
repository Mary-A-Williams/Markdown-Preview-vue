<script setup lang="ts">
import { computed } from 'vue';
import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const props = defineProps<{
  markdown: string 
}>();

marked.setOptions({
  highlight(code: string) {
    return hljs.highlightAuto(code).value;
  },
} as any);
const rendered = computed(() => {
  return marked.parse(props.markdown || '');
});

</script>

<template>
  <div v-html="rendered" class="preview-content" />
</template>