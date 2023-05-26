<template>
  <div class="top-menu">
    <div v-for="action in actions" :key="action.title">
      <v-btn text class="action-btn" :to="action.to">
        {{ action.title }}
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    actions: {
      type: Array,
      default: () => [],
    },
  },



  computed: {
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.top-menu {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.action-btn {
  color: $color-main-50;

  &.v-btn {
    padding: 8px;

    &:hover::before {
      opacity: 0 !important;
    }
  }

  &.v-btn--active::before {
    opacity: 0 !important;
  }

  .v-btn__content .v-icon {
    color: $color-light;
  }
  
}
</style>
