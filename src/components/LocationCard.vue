<template>
  <div class="episode-card">
    <div class="card-header">
      <h3>{{ location.name }}</h3>
      <p><span>Tipo: </span>{{ location.type }}</p>
      <p><span>Dimensión: </span>{{ location.dimension }}</p>
      <button @click="toggleCharacters" class="arrow-button">
        <i :class="{'arrow-up': showCharacters, 'arrow-down': !showCharacters}"></i>
      </button>
    </div>
    <div class="card-content" v-show="showCharacters">
      <h4>Residentes:</h4>
      <div class="character-row" v-for="(row, rowIndex) in characterRows" :key="rowIndex">
        <div class="character-item" v-for="(character, index) in row" :key="index">
          <img :src="character.image" :alt="character.name" class="character-image" />
          <span>{{ character.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showCharacters: false
    };
  },
  computed: {
    characterRows() {
      const characters = this.episode.characters;
      const rows = [];
      const rowSize = 5;

      for (let i = 0; i < characters.length; i += rowSize) {
        rows.push(characters.slice(i, i + rowSize));
      }

      return rows;
    }
  },
  methods: {
    toggleCharacters() {
      this.showCharacters = !this.showCharacters;
    }
  }
};
</script>

<style>
.episode-card {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3{
  width: 40%;
}

.card-header p{
  width: 30%;
}

.card-header p span{
  font-weight: bold;
}

.arrow-button {
  background: none;
  border: none;
  cursor: pointer;
}

.arrow-up:before {
  content: '▲';
}

.arrow-down:before {
  content: '▼';
}

.card-content {
  margin-top: 10px;
}

.character-row {
  display: flex;
  flex-wrap: wrap;
}

.character-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .character-item {
    width: 40%;
  }
}

@media (max-width: 576px) {
  .character-item {
    width: 100%;
  }
}

.character-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>

