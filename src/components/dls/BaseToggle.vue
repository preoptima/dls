<template>
  <div class="container ui-small-book">
    <input id="option1" type="radio" name="toggle" checked />
    <label for="option1">Option 1</label>

    <input id="option2" type="radio" name="toggle" />
    <label for="option2">Option 2</label>
  </div>
</template>

<script>
export default {
  name: 'BaseToggle',

  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  gap: var(--size-xs);
  background-color: var(--grey-01);
  padding: var(--size-xxs);
  border-radius: var(--size-xxs);
}

.container:hover {
  background-color: var(--grey-02);
}

input[type='radio'] {
  display: none;
}

label {
  cursor: pointer;
  padding: var(--size-s);
  color: var(--grey-05);
}

input[type='radio']:checked + label {
  background-color: var(--white);
  border-radius: calc(var(--size-xxs) / 2);
  color: var(--grey-06);
  font-weight: var(--ui-small-bold-font-weight);
}
</style>
