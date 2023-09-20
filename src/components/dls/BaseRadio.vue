<template>
  <label class="ui-medium-book">
    <input type="radio" :disabled="disabled" :class="{ error: errorMsg }" />
    {{ label }}
  </label>
  <span v-if="errorMsg" class="error ui-small-book">{{ errorMsg }}</span>
</template>

<script>
export default {
  name: 'BaseRadio',
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMsg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
  gap: var(--size-xs);
}

input[type='radio'] {
  appearance: none;
}

input::before {
  font-family: 'Material Symbols Outlined';
  content: 'radio_button_unchecked';
  font-size: 24px;
  color: var(--fields-input-default);
}

input:hover::before {
  color: var(--fields-input-hover);
}

input:checked::before {
  content: 'radio_button_checked';
  color: var(--fields-input-selected);
}

label:has(input:disabled),
input:disabled::before {
  color: var(--fields-input-disabled);
}

input.error::before {
  color: var(--fields-input-error);
}

span.error {
  color: var(--fields-input-error);
  margin-left: 40px;
}
</style>
