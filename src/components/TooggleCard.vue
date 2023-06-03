<template>
  <div class="tooggle-card">
    <div class="card-header">
      <h3>{{ entity.name }}</h3>
      <p v-if="origin == 'Episodios'"><span>Fecha: </span>{{ entity.air_date }}</p>
      <p v-if="origin == 'Episodios'"><span>Episodio: </span>{{ entity.episode }}</p>
      <p v-if="origin == 'Lugares'"><span>Tipo: </span>{{ entity.type }}</p>
      <p v-if="origin == 'Lugares'"><span>Dimensión: </span>{{ entity.dimension }}</p>
      <button @click="toggleCharacters" class="arrow-button">
        <i :class="{'arrow-up': showCharacters, 'arrow-down': !showCharacters}"></i>
      </button>
    </div>
    <div class="card-content" v-show="showCharacters">
      <div v-if="origin == 'Episodios'">
        <h4>Personajes:</h4>
      </div>
      <div v-if="origin == 'Lugares'">
        <h4>Residentes:</h4>
      </div>
      <div class="character-row" v-for="(row, rowIndex) in characterRows" :key="rowIndex">
        <div class="character-item" v-for="(character, index) in row" :key="index" @click="openModal(character.id)">
          <img :src="character.image" :alt="character.name" class="resident-image" />
          <span>{{ character.name }}</span>
        </div>
      </div>
    </div>
    <character-detail-modal v-if="showModal" :characterId="characterIdSelected" @close-modal="showModal = false" ></character-detail-modal>

  </div>
</template>

<script>
import CharacterDetailModal from './CharacterDetailModal.vue';

export default {
  components: {
    CharacterDetailModal
  },
  props: {
    entity: {
      type: Object,
      required: true
    },
    origin: {
      origin: String,
      required: true
    }
  },
  data() {
    return {
      showCharacters: false,
      showModal: false,
      characterIdSelected: null
    };
  },
  computed: {
    characterRows() {
      const characters = this.entity.characters;
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
    },
    openModal(characterId) {
      this.characterIdSelected = characterId;
      this.showModal = true
    },
  },
};
</script>

<style>
.tooggle-card {
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

.resident-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>

