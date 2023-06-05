<template>
  <div class="character-card" @click="showModal = true">
    <img :src="character.image" alt="Character Image" />
    <div class="card-content">
      <h3>{{ character.name }}</h3>
    </div>
    <character-detail-modal
      v-show="showModal"
      :characterId="character.id"
      @close-modal="showModal = false"
    ></character-detail-modal>
  </div>
</template>

<script>
import CharacterDetailModal from './CharacterDetailModal.vue';

export default {
  components: {
    CharacterDetailModal,
  },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>
.character-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.character-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
}

.character-card .card-content h3 {
  margin-top: 0;
}
</style>
