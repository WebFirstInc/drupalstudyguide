<script setup>
const props = defineProps({
  title: String
})
</script>

<style>
details.studyguide-question {
  padding: 0;
  margin: 1rem 0 0 0;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  &[open] summary {
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid var(--vp-c-gray-2);
  }

  summary {
    margin: 0;
    padding: 1rem;
    cursor: pointer;
    background-color: var(--vp-code-block-bg);
    border-radius: 8px;

    &:hover {
      text-decoration: underline;
    }
  }

  .content {
    padding: 1rem;
  }
}
</style>

<template>
  <details class='studyguide-question'>
    <summary>{{ title }}</summary>
    <div class="content">
      <slot></slot>
    </div>
  </details>
</template>
