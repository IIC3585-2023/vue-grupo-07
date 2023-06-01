<template>
  <header>
    <!-- Add rick and morty logo from public folder -->
    <img src="@/assets/ram_logo.png" alt="Rick and Morty logo" />
    <h3>Wubba Lubba Dub Hub</h3>
  </header>
</template>

<style scoped>
header {
  background-color: #74cd0f;
  font-family: 'Creepster';
  width: 100%;
  flex-shrink: 0;
  padding: 10px;
  display: flex;
  align-items: center;
}
h3 {
  padding: 1rem;
  font-weight: 800;
  font-size: 2rem;
  margin: 0;
}
img {
  width: 80px;
  height: 80px;
}
</style>
