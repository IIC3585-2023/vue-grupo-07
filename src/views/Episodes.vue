<template>
  <div>
    <page-header :title="title" :search-term="searchTerm" @update:searchTerm="searchTerm = $event"></page-header>
    <div class="card-container">
      <episode-card v-for="item in filteredItems" :key="item.id" :episode="item"></episode-card>
    </div>
    <pagination :totalPages=totalPages @page-change="fetchEpisodes"></pagination>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import Pagination from '../components/Pagination.vue';
import EpisodeCard from '../components/EpisodeCard.vue';
import { getAllEpisodes} from '../sevices';

export default {
  components: {
    EpisodeCard,
    PageHeader,
    Pagination
  },
  data() {
    return {
      items: [],
      totalPages: 3,
      searchTerm: '',
      title: "Episodios"
    };
  },
  
  created() {
    this.fetchEpisodes(1);
  },
  
  computed: {
    filteredItems() {
      const filtered = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        item.episode.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      return filtered;
    },
  },  

  methods: {
    async fetchEpisodes(page) {
      try {
        const episodes = await getAllEpisodes(page);
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

.episode-card {
  width: calc(80vw);
  margin-bottom: 20px;
}
</style>
