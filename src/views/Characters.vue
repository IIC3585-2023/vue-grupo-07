<template>
  <div>
    <h1> Characters </h1>
    <div class="search-container">
      <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Buscar...">
      </div>
    </div>
    <div class="card-container">
      <character-card v-for="item in filteredItems" :key="item.id" :character="item"></character-card>
    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import CharacterCard  from '../components/CharacterCard.vue';
import { getAllCharacters} from '../sevices';

export default {
  components: {
    CharacterCard // Register the Card component
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      itemsPerPage: 20,
      totalPages: 42,
      searchTerm: ''
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
        this.itemsPerPage = this.items.length
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchCharacters(this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchCharacters(this.currentPage)
      }
    }
  }
};
</script>

<style>
h1{
  text-align: center;
}
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

.search-container {
  display: flex;
  justify-content: center;
}
/* Styles for the SearchBar component */
.search-bar {
  margin-bottom: 16px;
  width: 20%;
  justify-content: center;
}

.search-bar input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Styles for the Pagination component */
.pagination {
  margin-top: 16px;
}

.pagination button {
  margin-right: 8px;
}
</style>
