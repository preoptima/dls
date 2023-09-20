<template>
  <label for="basedropdown" :class="{ disbled: disabled }">
    <span class="ui-small-book">{{ label }}</span>
    <select id="basedropdown" :disabled="disabled" :class="{ error: errorMsg }">
      <option value="" disabled selected>Please select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </label>
  <span v-if="errorMsg" class="error ui-small-book">{{ errorMsg }}</span>
</template>

<script>
export default {
  name: 'BaseDropdown',

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
select {
  height: var(--input-height);
  width: 100%;
  padding: 0 var(--size-s);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-01);
  border: 1px solid var(--grey-01);
  border-inline-end: var(--size-s) solid var(--grey-01);
  border-radius: var(--input-corner);
  color: var(--fields-input-default);
}

select:has(option:not([value='']):checked) {
  color: var(--fields-input-selected);
}

select:focus-visible {
  outline: 1px solid var(--fields-input-selected);
}

span.error {
  color: var(--fields-input-error);
}

select.error {
  outline: 1px solid var(--fields-input-error);
}
.disbled {
  color: var(--fields-input-label-disabled);
}
</style>
