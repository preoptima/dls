<template>
  <div class="step-indicator ui-large-bold">
    <div class="step" :class="{ 'complete material-symbols-outlined': complete, current }">
      {{ complete ? 'check_small' : step }}
    </div>
    <div class="label">{{ label }}</div>
    <div v-if="!last" class="line" />
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    },
    current: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.step-indicator {
  display: flex;
  align-items: center;
  gap: var(--size-xs);
  margin: 0 var(--size-xs);
}
.step {
  width: var(--size-l);
  height: var(--size-l);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--grey-02);
  color: var(--ui-high-emphasis);
  box-sizing: border-box;
}

.complete {
  background-color: var(--accent-01);
  color: var(--white);
  border: none;
}

.current {
  background-color: var(--grey-06);
  color: var(--white);
  border: none;
}

.line {
  width: var(--size-l);
  height: 0;
  border: 1px solid var(--grey-02);
}
</style>
