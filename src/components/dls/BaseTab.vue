<template>
  <button :class="{ selected }">
    <slot />
    <span class="ui-small-book">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseTab',

  props: {
    selected: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: var(--size-s);
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--size-xxs);
  color: var(--ui-high-emphasis);
}

button:hover {
  background-color: var(--tab-hover);
  color: var(--ui-high-emphasis);
}

.selected {
  background-color: var(--tab-selected);
  color: var(--white);
}
</style>
