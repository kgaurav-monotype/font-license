<script>
import { MtTypography } from '@antiqua-design-system/vue-components';

export default {
  props: {
    heading: {
      type: String,
      default: 'The Rebel Alliance',
    },
    links: {
      type: Array,
      default: () => ['Overview', 'Users', 'Roles', 'Teams', 'Divisions', 'SSO', 'Tags', 'Usage', 'Imported fonts', 'Font licensing', 'Settings'],
    },
    activeLink: {
      type: String,
      default: 'Font licensing',
    },
  },
  data() {
    return {
      currentActiveLink: this.activeLink,
    };
  },
  methods: {
    selectLink(link) {
      this.currentActiveLink = link;
      this.$emit('link-selected', link);
    }
  },
  components: {
    MtTypography
  }
};

</script>

<template>
  <header class="wrapper">
    <MtTypography v-bind="{ tag: 'h1', variant: 'heading7--bold' }">{{ heading }}</MtTypography>
    <nav class="space-x-4">
      <a v-for="link in links" :key="link" href="#" class="tab-link"
        :class="{ 'tab-link--active': currentActiveLink === link }" @click="selectLink(link)">
        <MtTypography v-bind="{ tag: 'span', variant: 'body1--medium' }">{{ link }}</MtTypography>
      </a>
    </nav>
  </header>
</template>

<style scoped>
.wrapper {
  background-color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: var(--mt-spacing-unit--xl) var(--mt-spacing-unit--lg);
  border: 1px solid var(--mt-color--spirits--300);
  position: sticky;
  top: 100px;
  z-index: 50;
}

body:not(.notification) .wrapper {
  top: 0;
}

.tab-link {
  position: relative;
  display: inline-block;

  mt-typography::part(mt-typography) {
    color: var(--mt-color--spirits--600);
  }

  &.tab-link--active {
    mt-typography::part(mt-typography) {
      color: var(--mt-color--spirits--900);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      bottom: -8px;
      height: 3px;
      background-color: var(--mt-color--blue-duck--500);
    }
  }
}
</style>
