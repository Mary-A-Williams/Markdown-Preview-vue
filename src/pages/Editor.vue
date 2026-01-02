<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import Preview from '../components/Preview.vue';
import SaveLoadControls from '../components/SaveLoadControls.vue';

const STORAGE_KEY = 'md-preview-content-v1';

const value = ref<string>('');
const loading = ref<boolean>(false);

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  value.value = saved || '# Hello World\n\nType markdown here...';
});

watch(value, (newVal) => {
  localStorage.setItem(STORAGE_KEY, newVal);
});

function handleLoadFile(content: string) {
  value.value = content;
}

function handleSaveFile() {
  const blob = new Blob([value.value], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'notes.md';
  a.click();
  URL.revokeObjectURL(url);
}

async function handleSaveToApi() {
  loading.value = true;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: value.value }),
    });
    const json = await res.json();
    alert(`Saved with id ${json.id}`);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
<section class="editor-page" aria-label="Markdown Editor and preview Page">
  <div class="editor-controls">
    <SaveLoadControls
      :onLoadFile="handleLoadFile"
      :onSaveFile="handleSaveFile"
      :onSaveToApi="handleSaveToApi"
      :loading="loading"
    />
  </div>

  <div class="editor-grid">
    <div class="editor-column">
      <label for="md-editor" class="visually-hidden">Markdown editor</label>
      <textarea
        ref="textareaRef"
        id="md-editor"
        class="md-textarea"
        v-model="value"
        placeholder="Type Markdown here..."
        aria-label="Markdown editor"
      />
    </div>

    <div class="preview-column" aria-live="polite">
      <Preview :markdown="value" />
    </div>
  </div>
</section>
</template>



