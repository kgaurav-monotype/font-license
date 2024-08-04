<script>

import {MtTypography} from '@antiqua-design-system/vue-components';

export default {
  components: {
    MtTypography
  },
  props: {
    heading: {
      type: String,
      default: 'Notification',
    },
    message: {
      type: String,
      default: 'This is a notification message.',
    },
    status: {
      type: String,
      default: 'success',
    },
  },
  computed: {
    typographyColor() {
      return this.status === 'success' ? {text: 'turtle-green--800',bg: 'var(--mt-color--turtle-green--50)'} : {text: 'red-babe--800',bg: 'var(--mt-color--red-babe--50)'};
    }
  }
};
</script>:class="isSidebarOpen ? 'open' : 'close'"

<template>
    <div class="notification flex flex-col gap-3 p-6 sticky" :style="{ backgroundColor: typographyColor.bg, top: 0 }">
        <MtTypography v-bind="{ tag: 'h2', variant: 'heading7--bold', color: typographyColor.text }">{{heading}}</MtTypography>
        <MtTypography v-bind="{ tag: 'p', variant: 'body2--regular', color: typographyColor.text }">{{ message }}</MtTypography>
    </div>
</template>

<style scoped>
.notification {
    width: 100%;
    z-index: 50;
    transition: top 0.5s;
}
</style>
