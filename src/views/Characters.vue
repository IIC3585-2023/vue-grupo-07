<template>
  <div>
    <page-header :title="title" :search-term="searchTerm" @update:searchTerm="searchTerm = $event"></page-header>
    <div class="card-container">
      <character-card v-for="item in filteredItems" :key="item.id" :character="item"></character-card>
    </div>
    <pagination :totalPages=totalPages @page-change="fetchCharacters"></pagination>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import Pagination from '../components/Pagination.vue';
import CharacterCard from '../components/CharacterCard.vue';
import { getAllCharacters} from '../sevices';

export default {
  components: {
    CharacterCard,
    PageHeader,
    Pagination
  },
  data() {
    return {
      items: [],
      totalPages: 42,
      searchTerm: '',
      title: "Personajes"
    };
  },
  
  created() {
    this.fetchCharacters(1);
  },
  
  computed: {
    filteredItems() {
      const filtered = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      return filtered;
    },
  },  

  methods: {
    async fetchCharacters(page) {
      try {
        const characters = await getAllCharacters(page);
        this.items = characters;
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    }
  }
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}

.character-card {
  width: calc(21vw - 10px);
  margin-bottom: 20px;
}
</style>
