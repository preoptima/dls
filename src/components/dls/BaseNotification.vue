<template>
  <div class="BaseNotification elevation-02" :class="type">
    <div class="inner" :class="type">
      <span class="material-symbols-outlined" :class="'icon-' + type"> {{ icon }} </span>
      <div class="content">
        <div class="ui-medium-bold">{{ title }}</div>
        <div class="ui-medium-book">{{ content }}</div>
      </div>
      <button class="material-symbols-outlined close-btn" @click="$emit('close')">close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    }
  },

  emits: ['close'],

  computed: {
    icon() {
      switch (this.type) {
        case 'success':
          return 'check_circle'
        case 'warning':
        case 'error':
          return 'error'
        case 'info':
          return 'info'
        default:
          return 'success'
      }
    }
  }
}
</script>

<style scoped>
.BaseNotification {
  background-color: var(--signal-success);
  border-radius: var(--size-xxs);
  max-width: 600px;
}

.BaseNotification.success {
  background-color: var(--signal-success);
}

.BaseNotification.warning {
  background-color: var(--signal-alert);
}

.BaseNotification.error {
  background-color: var(--signal-error);
}

.BaseNotification.info {
  background-color: var(--signal-info);
}

.icon-success {
  color: var(--signal-success);
}

.icon-warning {
  color: var(--signal-alert);
}

.icon-error {
  color: var(--signal-error);
}

.icon-info {
  color: var(--signal-info);
}

.inner {
  position: relative;
  left: 2px;
  padding: var(--size-s) var(--size-m);
  display: flex;
  gap: var(--size-m);
  align-items: start;
  border-start-end-radius: var(--size-xxs);
  border-end-end-radius: var(--size-xxs);
}

.inner.success {
  background-color: #ecfff5;
}

.inner.warning {
  background-color: #fffff2;
}

.inner.error {
  background-color: #fff7fa;
}

.inner.info {
  background-color: #e9f3ff;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--size-xxs);
}

.close-btn {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inline;
}
</style>
