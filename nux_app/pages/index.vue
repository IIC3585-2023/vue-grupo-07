<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',

  beforeCreate() {
    this.$router.push({
      path: "/leagues",
    });
  },
}
</script>
