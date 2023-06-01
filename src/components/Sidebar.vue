<template>
  <div class="sidebar">
    <div class="menu-button" @click="toggleNavbar">
      <i class="fa fa-bars"></i>
    </div>
    <ul class="sidebar_content">
      <li @click="redirectTo('/')">Home</li>
      <li @click="toggleWiki">Wiki</li>
      <ul v-show="showWiki">
        <li @click="redirectTo('/wiki/characters')">Characters</li>
        <li @click="redirectTo('/wiki/locations')">Locations</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWiki: false,
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
      const sidebar = document.querySelector('.sidebar');
      const sidebar_content = document.querySelector('.sidebar_content');
      sidebar.classList.toggle('hidden');
      sidebar_content.classList.toggle('hidden');
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #fefefe;
  position: sticky;
  min-height: 100%;
  border-right: 1px solid #e0e0e0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 10px;
  cursor: pointer;
}

.sidebar ul li:hover {
  background-color: #e0e0e0;
}

.sidebar ul ul {
  padding-left: 20px;
  display: none;
}

.sidebar ul ul li {
  padding: 5px 10px;
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

.sidebar_content.hidden {
  display: none;
}

.sidebar.hidden {
  min-height: 1rem;
  width: 2.5rem;
}
</style>
