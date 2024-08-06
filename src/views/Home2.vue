<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import MainContent2 from '../components/MainContent2.vue';
import Notification from "../components/Notification.vue";
import eventBus from "../lib/eventBus";

export default {
 name: 'Home2',
  components: {
    Navbar,
    Header,
    MainContent2,
    Notification,
  },
  data() {
    return {
      activeLink: 'Font licensing',
      notification: {
        status: 'warning',
        heading: 'Confirmed production font list is not submitted.',
        message: 'Additional text if needed'
      },
    };
  },
  methods: {
    updateTab(link) {
      this.activeLink = link;
    }
  },
  created() {
      // Listen for the event and update the notification
      eventBus.on('updateNotification', (payload) => {
        this.notification.status = payload.status;
        this.notification.heading = payload.heading;
        this.notification.message = payload.message;
      });
  },
  beforeUnmount() {
      eventBus.off('updateNotification');
  }
};

</script>

<template>
  <div class="main-wrapper">
    <Navbar />
    <Notification :status="notification.status" :heading="notification.heading" :message="notification.message"/>
    <Header heading="Esri" @link-selected="updateTab" />
    <MainContent2 :activeLink="activeLink" />
  </div>
</template>

<style scoped>
.main-wrapper {
  height: 100vh;
  width: 100%;
}
</style>