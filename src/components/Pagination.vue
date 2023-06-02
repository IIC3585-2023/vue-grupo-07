<template>
  <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    previousPage() {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.$emit('page-change', this.currentPage);
          }
        },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit('page-change', this.currentPage);
      }
    }
}
 
};


</script>


<style>
/* Styles for the Pagination component */
.pagination {
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.pagination button {
  margin-right: 8px;
}

</style>