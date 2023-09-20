<template>
  <button
    class="BaseButton ui-medium-bold"
    :class="{ 'BaseButton--secondary': secondary }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.BaseButton {
  background-color: var(--button-fill-default);
  color: var(--button-label-default);
  padding-inline: var(--button-padding);
  border-radius: var(--button-corner);
  height: var(--button-height);
  cursor: pointer;
  border: none;
}

.BaseButton:hover {
  background-color: var(--button-fill-hover);
}

.BaseButton:active {
  background-color: var(--button-fill-pressed);
}

.BaseButton:focus-visible {
  outline: solid 2px var(--button-stroke-focus);
}

.BaseButton:disabled {
  background-color: var(--button-fill-disabled);
}

.BaseButton--secondary {
  background-color: var(--button-fill-secondary);
  color: var(--button-label-secondary);
}

.BaseButton--secondary:hover {
  background-color: var(--button-secondary-hover);
}

.BaseButton--secondary:active {
  background-color: var(--button-secondary-pressed);
}

.BaseButton--secondary:focus-visible {
  outline: solid 2px var(--button-stroke-focus);
}

.BaseButton--secondary:disabled {
  background-color: var(--button-fill-secondary);
  color: var(--button-label-secondary-disabled);
}
</style>
