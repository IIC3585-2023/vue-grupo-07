<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h6>{{ character?.name }}</h6>
        <button class="close-button" @click="$emit('close-modal')">&times;</button>
      </div>
      <div class="modal-body">
        <div class="character-image">
          <img :src="character?.image" :alt="character?.name" />
        </div>
        <div class="character-details">
          <p><strong>Estado:</strong> {{ character?.status }}</p>
          <p><strong>Especie:</strong> {{ character?.species }}</p>
          <p><strong>Tipo:</strong> {{ character?.type }}</p>
          <p><strong>Género:</strong> {{ character?.gender }}</p>
          <p><strong>Origen:</strong> {{ character?.origin.name }}</p>
          <p><strong>Localización:</strong> {{ character?.location.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacterById } from '../sevices';

export default {
  props: {
    characterId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      character: null
    }
  },
  created() {
    this.fetchCharacterDetails();
  },
  methods: {
    async fetchCharacterDetails() {
      try {
        const character = await getCharacterById(this.characterId);
        this.character = character;
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    }
  }
};
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.modal-header {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h6 {
  margin: 0;
  font-size: 20px;
}

.close-button {
  border-radius: 30%;
  cursor: pointer;
  background-color: #ac003e;
  color: white;
  font-size: 12px;
}

.modal-body {
  padding: 20px;
  display: flex;
}

.character-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.character-details {
  margin-left: 20px;
}

.character-details p {
  margin: 8px 0;
}

.character-details ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.character-details li {
  margin-bottom: 4px;
}

.character-details li::before {
  content: "•";
  margin-right: 4px;
}
</style>