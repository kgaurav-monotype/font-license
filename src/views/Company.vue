<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import MainContent from '../components/MainContent.vue';

export default {
    name: 'Company',
    components: {
        Navbar,
        Header,
        MainContent,
    },
    data() {
        return {
            heading: 'Manage Monotype Fonts',
            customLinks: ['Companies', 'Users', 'Events'],
            customActiveLink: 'Companies',
        };
    },
    methods: {
        handleLinkSelected(link) {
            console.log(this.customActiveLink);
            this.customActiveLink = link;
        },
    },
};

</script>

<template>
    <div class="main-wrapper">
        <Navbar />
        <Header :heading="heading" :links="customLinks" :activeLink="customActiveLink" @link-selected="handleLinkSelected" />
        <MainContent :activeLink="customActiveLink" />
    </div>
</template>

<style scoped>
.main-wrapper {
    height: 100vh;
    width: 100%;
}
</style>