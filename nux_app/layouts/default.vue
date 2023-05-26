<template>
  <v-app dark>
    <v-app-bar class="app-bar" elevation="5" fixed app :height="71">
      <TopNavbarActions
        :actions="actions"
      />
    </v-app-bar>

    <v-main class="background">
      <v-container class="container">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopNavbarActions from "@/components/layouts/TopNavbarActions.vue";
import UserTopNavbar from "@/constants/TopNavbarContent.js";

export default {
  name: "DefaultLayout",

  components: {
    TopNavbarActions,
  },

  data() {
    return {
      showDrawer: false,
    };
  },

  computed: {
    actions() {
      return  UserTopNavbar["actions"]
    },
  },

  methods: {

    toggleDrawer(show) {
      this.showDrawer = show;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.background {
  background: $color-light;
}


.container {
  padding: 0px;
  height: 100%;
  width: 100%;
  max-width: 100%;
}


</style>
