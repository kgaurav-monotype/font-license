<template>
  <div>
    <label class="inline-flex items-center cursor-pointer">
      <div
        @click="toggleSwitch"
        :class="isOn ? 'bg-blue-500' : 'bg-gray-200'"
        class="relative w-10 h-6 rounded-full transition-colors duration-200 ease-in-out"
      >
        <span
          class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out"
          :class="{ 'transform translate-x-4': isOn }"
        ></span>
    </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    isOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSwitch() {
      this.$emit('updateSwitch');
    },
  },
};
</script>

<style>
.dot {
  transition: transform 0.2s ease-in-out;
}
</style>
