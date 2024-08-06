<template>
  <nav style="display: none;">
    <RouterLink to="/font-license/">Go to Home</RouterLink>
    <RouterLink to="/font-license/company">Go to Company</RouterLink>
    <RouterLink to="/font-license/home2">Go to Home2</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push('/font-license/');
  },
};
</script>
