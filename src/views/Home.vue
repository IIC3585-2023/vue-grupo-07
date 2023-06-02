<template>
  <div class="landing_container">
    <img src="@/assets/ram_wallpaper.jpg" alt="Rick and morty wallpaper" />
    <div class="home_section">
      <div>
        <h2>Bienvenido a</h2>
        <h2>Wubba Lubba Dub Hub</h2>
        <h3>El mejor lugar para todos los fanáticos de Rick and Morty</h3>
      </div>
      <img src="@/assets/rick.png" alt="Rick Sanchez" />
    </div>
    <div class="home_section">
      <img src="@/assets/morty.png" alt="Rick Sanchez" />
      <div>
        <h2>Wiki y Motor</h2>
        <h3>
          Puedes encontrar toda la información de todos los personajes,
          capitulos y lugares. Además puedes usar nuestro motor de busqueda que
          te dará el mejor capitulo de Rick and Morty según las preferencias que
          tengas.
        </h3>
      </div>
    </div>

    <div class="category_section">
      <div class="category_item"  @click="$event => redirectTo('/wiki/characters')">
        <img src="@/assets/characters.jpg" alt="Characters" />
        <h2>Personajes</h2>
        <p>Descubre más sobre los personajes de Rick and Morty.</p>
      </div>
      <div class="category_item" @click="$event => redirectTo('/wiki/locations')">
        <img src="@/assets/locations.jpg" alt="Locations" />
        <h2>Localizaciones</h2>
        <p>Explora los diferentes lugares en el universo de Rick and Morty.</p>
      </div>
      <div class="category_item" @click="$event => redirectTo('/wiki/episodes')">
        <img src="@/assets/episodes.jpg" alt="Episodes" />
        <h2>Episodios</h2>
        <p>Revive tus episodios favoritos y descubre nuevos.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CounterButton from '@/components/CounterButton.vue';
export default {
  methods: {
    redirectTo(route) {
      // Perform the redirect to the specified route
      this.$router.push(route);
    },
  }
}
</script>

<style scoped>
.landing_container {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding-bottom: 10rem;
}

.landing_container > img {
  height: 15rem;
  object-fit: cover;
}

.home_section {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.home_section > div {
  width: 50%;
}

.home_section > div > h2 {
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
}

.home_section > div > h3 {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0 4rem;
  margin: 0;
}

.landing_container div img {
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  margin: auto;
}

.category_section {
  display: flex;
  justify-content: space-around;
  gap: 5rem;
  margin: 0 5rem;
}

.category_item {
  text-align: center;
}

.category_item img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.category_item h2 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}

.category_item p {
  font-size: 1.2rem;
}
</style>
