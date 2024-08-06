<script>
import { MtTypography } from '@antiqua-design-system/vue-components';
export default {
  components: {
    MtTypography,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    additionalText: {
      type: String,
      default: "",
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<template>
  <div class="expandable-bar" :class="{ 'expanded': isExpanded }">
    <div @click="toggleExpand" v-if="!isExpanded" class="cursor-pointer p-6">
      <MtTypography v-bind="{ tag: 'p', variant: 'body2--regular' }">{{ title }}</MtTypography>
    </div>
    <div v-if="isExpanded" class="bar-content p-6">
      <MtTypography class="mb-6" v-bind="{ tag: 'p', variant: 'body2--regular' }">{{ additionalText }}</MtTypography>
      <MtTypography class="mb-4" v-bind="{ tag: 'p', variant: 'body1--bold' }">References</MtTypography>
      <div class="thumbnails flex gap-5 mt-2">
        <img alt="" v-for="(image, index) in images" :key="index" :src="image"
          class="thumbnail w-1/4 h-auto object-cover rounded-xl" />
      </div>
    </div>
  </div>
</template>




<style scoped>
.expandable-bar {
  background-color: var(--mt-color--spirits--50);
  border-bottom: 1px solid var(--mt-color--spirits--300);
  height: 65px;
  transition: height .3s ease-out;;
}

.thumbnails {
  overflow-x: auto;
}

.expandable-bar.expanded {
  height: 355px;
}
</style>