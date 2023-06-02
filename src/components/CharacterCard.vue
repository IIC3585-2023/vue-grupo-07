<template>
  <div class="character-card">
    <img :src="character.image" alt="Character Image">
    <div class="card-content">
      <h3>{{ character.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  }
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
