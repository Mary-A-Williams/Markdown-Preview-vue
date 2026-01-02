<script setup lang="ts">
import { ref } from 'vue';

interface SaveLoadControlsProps {
  onLoadFile: (content: string) => void;
  onSaveFile: () => void;
  onSaveToApi: () => void;
  loading: boolean;
}

const props = defineProps<SaveLoadControlsProps>();

const fileInputRef = ref<HTMLInputElement | null>(null);

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    props.onLoadFile(reader.result as string);
  };
  reader.readAsText(file);
}
</script>

<template>
  <div class="save-load-controls" role="toolbar" aria-label="Save and load controls">
    <input
      type="file"
      accept=".md,text/markdown"
      style="display: none"
      ref="fileInputRef"
      @change="handleFileChange"
      aria-hidden="true"
    />

    <button
      @click="fileInputRef?.click()"
      aria-label="Load markdown file"
    >
      Load .md
    </button>

    <button @click="props.onSaveFile" aria-label="Save markdown file">
      Download .md
    </button>

    <button
      @click="props.onSaveToApi"
      :disabled="props.loading"
      aria-label="Save to API"
    >
      {{ props.loading ? "Saving..." : "Save to API" }}
    </button>
  </div>
</template>

<!-- <style>
/* Use the same CSS as your TS React version */
.save-load-controls button {
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 5px;
  border: 1px solid #000;
  background: #0D54C5;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
}

.save-load-controls button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style> -->
