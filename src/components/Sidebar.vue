<template>
  <div class="sidebar hidden">
    <div class="menu-button" @click="toggleNavbar">
      <i class="fa fa-bars"></i>
    </div>
    <ul class="sidebar_content hidden">
      <li @click="redirectTo('/')">Home</li>
      <li @click="toggleWiki">Wiki</li>
      <ul v-show="showWiki">
        <li>Characters</li>
        <li>Locations</li>
        <li>Episodes</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWiki: false,
      showSidebar: false,
    };
  },
  methods: {
    redirectTo(route) {
      // Perform the redirect to the specified route
      this.$router.push(route);
    },
    toggleWiki() {
      // Toggle the visibility of the wiki sub-menu
      this.showWiki = !this.showWiki;
    },
    toggleNavbar() {
      // Toggle the visibility of the navbar
      this.showSidebar = !this.showSidebar;
      const sidebar = document.querySelector('.sidebar');
      const sidebar_content = document.querySelector('.sidebar_content');
      sidebar.classList.toggle('hidden');
      sidebar_content.classList.toggle('hidden');
      this.$emit('toggle-sidebar', this.sidebar);
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f6f5f5;
  position: fixed; /* Make the sidebar fixed */
  top: 4rem; /* Position it at the top of the viewport */
  bottom: 0; /* Stretch it to the bottom of the viewport */
  left: 0; /* Position it at the left side */
  border-right: 1px solid #e0e0e0;
  overflow-y: auto; /* Enable vertical scrolling if needed */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  padding: 1rem 1.5rem;
  cursor: pointer;
}

.sidebar ul li:hover {
  background-color: #e0e0e0;
}
.sidebar ul ul li {
  padding: 0.5rem 3rem;
}

.menu-button {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.menu-button i {
  font-size: 20px;
}

.sidebar_content > li {
  padding-left: 3rem;
}

.sidebar_content.hidden {
  display: none;
}

.sidebar.hidden {
  min-height: 1rem;
  width: 2.5rem;
}
</style>
