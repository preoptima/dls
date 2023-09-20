<template>
  <DialogComponent :open="isOpen" class="BaseDialog" :class="size" @close="setIsOpen">
    <DialogPanel>
      <DialogTitle v-if="title" class="title heading-02">{{ title }}</DialogTitle>
      <slot />
    </DialogPanel>
  </DialogComponent>
</template>

<script>
import { Dialog as DialogComponent, DialogPanel, DialogTitle } from '@headlessui/vue'

export default {
  components: {
    DialogComponent,
    DialogPanel,
    DialogTitle
  },

  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isOpen: this.open
    }
  },

  watch: {
    open(value) {
      this.isOpen = value
    }
  },

  methods: {
    setIsOpen(value) {
      this.isOpen = value
    }
  }
}
</script>

<style>
.BaseDialog {
  background-color: var(--white);
  padding: var(--size-l);
  border-radius: var(--size-m);
  box-shadow: 0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 500px;
}

.BaseDialog .title {
  margin-block: 0;
}

.sm {
  max-width: 300px;
}

.lg {
  max-width: 800px;
}

.xl {
  max-width: 1140px;
}
</style>
