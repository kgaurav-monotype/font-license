<template>
  <!-- <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/company">Go to About</RouterLink>
  </nav> -->
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push('/');
  },
};
</script>
