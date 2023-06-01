<template>
  <div class="app">
    <Navbar />
    <div class="main_container">
      <Sidebar />
      <div class="page_content">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
}

.main_container {
  flex-grow: 1;
  display: flex;
}

.page_content {
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
