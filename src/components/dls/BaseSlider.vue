<template>
  <label class="ui-small-book">
    Slider
    <div class="slider">
      <input
        ref="range"
        type="range"
        :disabled="disabled"
        @input="change('#83BD38')"
        @change="hover"
        @mousedown="drag"
        @mouseenter="hover"
        @mouseleave="leave"
      />
      <span class="ui-medium-book slider-value" :class="{ disabled }">{{ value }}</span>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    value: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      slider: null
    }
  },

  mounted() {
    this.slider = this.$refs.range
    this.change('#808080')
  },

  methods: {
    change(color) {
      if (this.disabled) return
      const sliderValue = this.slider.value
      this.slider.style.background = `linear-gradient(to right, ${color} ${sliderValue}%, #0000001F ${sliderValue}%)`
    },

    hover() {
      if (this.disabled) return
      this.slider.style.setProperty('--hover-width', '12px')
      this.slider.style.setProperty('--hover-height', '12px')
      this.slider.style.setProperty('--hover-radius', '12px')
      this.slider.style.setProperty('--hover-color', '#1A1A1A')
      this.change('#1A1A1A')
    },

    leave() {
      if (this.disabled) return
      this.slider.style.setProperty('--hover-height', '8px')
      this.slider.style.setProperty('--hover-width', '2px')
      this.slider.style.setProperty('--hover-radius', '0')
      this.slider.style.setProperty('--hover-color', '#808080')
      this.change('#808080')
    },

    drag() {
      if (this.disabled) return
      this.slider.style.setProperty('--hover-color', '#83BD38')
      this.change('#83BD38')
    }
  }
}
</script>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  height: 2px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: var(--hover-height, var(--size-xs));
  width: var(--hover-width, 2px);
  border-radius: var(--hover-radius, 0);
  background-color: var(--hover-color, var(--slider-scrubber));
  margin: 5px 0;
}

input[type='range']::-moz-range-thumb {
  height: var(--hover-height, var(--size-xs));
  width: var(--hover-width, 2px);
  border-radius: var(--hover-radius, 0);
  background-color: var(--hover-color, var(--slider-scrubber));
  border: none;
}

input[type='range']:disabled {
  background: var(--fields-input-label-disabled);
  cursor: auto;
}

input[type='range']:disabled::-webkit-slider-thumb {
  background-color: var(--fields-input-label-disabled);
}

input[type='range']:disabled::-moz-range-thumb:disabled {
  background-color: var(--fields-input-label-disabled);
}

.slider {
  display: flex;
  align-items: center;
}

.slider-value {
  width: var(--size-ml);
  text-align: end;
}

.slider-value.disabled {
  color: var(--fields-input-label-disabled);
}
</style>
