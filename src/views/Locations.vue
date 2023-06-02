<template>
  <div>
    <page-header :title="title" :search-term="searchTerm" @update:searchTerm="searchTerm = $event"></page-header>
    <div class="card-container">
      <tooggle-card v-for="item in filteredItems" :key="item.id" :entity="item" :origin="title"></tooggle-card>
    </div>
    <pagination :totalPages=totalPages @page-change="fetchLocations"></pagination>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import Pagination from '../components/Pagination.vue';
import TooggleCard from '../components/TooggleCard.vue';
import {getAllLocations} from '../sevices';

export default {
  components: {
    TooggleCard,
    PageHeader,
    Pagination
  },
  data() {
    return {
      items: [],
      totalPages: 7,
      searchTerm: '',
      title: "Lugares"
    };
  },
  
  created() {
    this.fetchLocations(1);
  },
  
  computed: {
    filteredItems() {
      const filtered = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        item.type.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      return filtered;
    },
  },  

  methods: {
    async fetchLocations(page) {
      try {
        const episodes = await getAllLocations(page);
        this.items = episodes;
      } catch (error) {
        console.error('Error al obtener los episodios:', error);
      }
    }
  }
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
}

.tooggle-card {
  width: calc(80vw);
  margin-bottom: 20px;
}
</style>
