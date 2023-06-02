<template>
  <div class="app">
    <Navbar />
    <div class="main_container">
      <Sidebar @toggle-sidebar="handleToggleSidebar" />
      <div class="page_content colapse">
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
  methods: {
    handleToggleSidebar() {
      // Toggle the visibility of the wiki sub-menu
      const page_content = document.querySelector('.page_content');
      page_content.classList.toggle('colapse');
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
}

.main_container {
  flex-grow: 1;
  display: flex;
  min-width: calc(100vw - 17px); 
  max-width: 100vw; 
}

.page_content {
  display: flex;
  justify-content: center;
  padding-left: 200px;
  width: 100%;
}
.page_content.colapse {
  padding-left: 2.5rem;
}
</style>
