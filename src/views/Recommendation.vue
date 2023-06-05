<template>
  <div class="container">
    <div class="header">
      <h1>PortalPicker</h1>
      <img src="@/assets/portal.png" alt="logo" />
    </div>
    <div class="selected">
      <div class="selected_characters">
        <h3>Personajes elegidos</h3>
      </div>
      <div class="selected_locations">
        <h3>Ubicaciones elegidas</h3>
      </div>
    </div>
    <div class="selector">
      <button
        class="selector_characters btn-1"
        @click="selectSection('personajes')"
        :class="{ active: selectedSection === 'personajes' }"
      >
        <h3>Personajes</h3>
      </button>
      <h2>|</h2>
      <button
        class="selector_locations btn-1"
        @click="selectSection('ubicaciones')"
        :class="{ active: selectedSection === 'ubicaciones' }"
      >
        <h3>Ubicaciones</h3>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSection: 'personajes',
    };
  },
  methods: {
    selectSection(section) {
      // Handle the selection of a section
      this.selectedSection = section;
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}

h2 {
  font-weight: 400;
}

.btn-1 {
  background-color: transparent;
  transition: none;
}

.btn-1:hover {
  border: none;
  outline: none;
  transition: none;
}

.btn-1:focus,
.btn-1:active {
  color: #74cd0fca;
  outline: none;
  border: none;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container > div {
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f1f1f1;
}

.header img {
  margin: 0 1rem;
  width: 8rem;
  height: 8rem;
}

.header h1 {
  margin: 0;
  padding: 0;
}

.selected {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}

.selector {
  display: flex;
  justify-content: flex-start;
}

.selected_characters,
.selected_locations,
.selector_characters,
.selector_locations {
  cursor: pointer;
}

.active {
  color: #74cd0fca;
}
</style>
