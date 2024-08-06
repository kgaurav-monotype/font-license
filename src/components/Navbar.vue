<script>
import { MtTypography, MtBadge, MtIconArrowCaret, MtIconSearch, MtIconAgreementsCopy, MtIconReload  } from '@antiqua-design-system/vue-components';

export default {
  components: {
    MtTypography,
    MtBadge,
    MtIconArrowCaret,
    MtIconSearch,
    MtIconAgreementsCopy,
    MtIconReload,
  },
  methods: {
    gotoHome() {
      this.$router.push('/font-license/');
    },
    goToCompany() {
      this.$router.push('/font-license/company');
    },
    goToHome2() {
      this.$router.push('/font-license/home2');
    },
  },
};
</script>

<template>
    <div class="navbar p-6">
        <div class="flex gap-20 items-center">
            <span class="logo cursor-pointer" @click="gotoHome">M.</span>
            <div class="flex items-center relative">
                <input type="text" class="searchbar rounded-sm" placeholder="Search for fonts, designers & tags...">
                <MtIconSearch class="absolute right-4" color="spirits--600"></MtIconSearch>
            </div>
            <div class="flex gap-6">
                <MtTypography class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body1--medium', color: 'spirits--700' }">Dashboard</MtTypography>
                <MtTypography class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body1--medium', color: 'spirits--700' }">Browse</MtTypography>
                <MtTypography class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body1--medium', color: 'spirits--700' }">My library</MtTypography>
                <MtTypography @click="goToHome2" class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body1--medium', color: 'spirits--700' }">Resources</MtTypography>
                <MtTypography @click="goToCompany" class="relative cursor-pointer" v-bind="{ tag: 'span', variant: 'body1--medium', color: 'spirits--50' }">Manage
                    <span class="absolute bottom-line"></span>
                </MtTypography>
            </div>
        </div>
        <div class="flex gap-6 items-center ">
            <MtIconAgreementsCopy size="md" class="cursor-pointer" color="spirits--500">
                <mt-badge slot="badge" color="blue" value="4" position="top-right"></mt-badge>
            </MtIconAgreementsCopy>
            <MtIconReload size="md" class="cursor-pointer" color="spirits--500"></MtIconReload>
            <div class="flex flex-col">
                <MtTypography class="cursor-pointer -mb-2" v-bind="{ tag: 'span', variant: 'body2--regular', color: 'spirits--100' }">John Doe</MtTypography>
                <MtTypography class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body2--regular', color: 'spirits--600' }">Divison Name</MtTypography>
            </div>
            <div style="background-color: var(--mt-color--magneton--500)" class="cursor-pointer flex items-center justify-center w-10 h-10 p-3 rounded-full">P</div>
        </div>
    </div>
</template>

<style scoped>

.navbar {
  background-color: #13181B;
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
    font-size: 20px;
    font-family: 'HelveticaNowMTDisplayExtraBold';
}
.searchbar {
    background-color: #30373D;
    color: white;
    padding: 12px;
    border: none;
    outline: none;
    width: 400px;
    height: 40px;
}
.bottom-line {
    width: 100%;
    height: 4px;
    background: #2196F3;
    left: 0;
    bottom: -20px;
}
</style>
