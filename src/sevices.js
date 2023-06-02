import axios from "axios";

const api_url = import.meta.env.VITE_API_URL

export async function getAllCharacters(page) {
  try {
    const res = await axios.get(
      `${api_url}/character?page=${page}`
    );
    const characters = res.data.results.map(character => {
      const { id, name, image } = character;
      return { id, name, image };
    });
    const charactersArray = Object.values(characters);
    return charactersArray
  } catch (error) {
    console.log(error)
  }
}

export async function getCharacterById(character_id) {
  try {
    const res = await axios.get(
      `${api_url}/character/${character_id}`
    );
    const character = res.data
    return character
  } catch (error) {
    console.log(error)
  }
}

export async function getAllEpisodes(page) {
  try {
    const res = await axios.get(
      `${api_url}/episode?page=${page}`
    );
    const episodes = res.data.results.map(ep => {
      const { id, name, episode, air_date } = ep;
      return { id, name, episode, air_date };
    });
    const episodesArray = Object.values(episodes);
    return episodesArray
  } catch (error) {
    console.log(error)
  }
}

export async function getEpisodeById(episode_id) {
  try {
    const res = await axios.get(
      `${api_url}/episode/${episode_id}`
    );
    const episode = res.data
    return episode
  } catch (error) {
    console.log(error)
  }
}

export async function getAllLocations(page) {
  try {
    const res = await axios.get(
      `${api_url}/location?page=${page}`
    );
    const locations = res.data.results.map(location => {
      const { id, name, type, dimension } = location;
      return { id, name, type, dimension };
    });
    const loacationsArray = Object.values(locations);
    return loacationsArray
  } catch (error) {
    console.log(error)
  }
}

export async function getLocationById(location_id) {
  try {
    const res = await axios.get(
      `${api_url}/location/${location_id}`
    );
    const location = res.data
    return location
  } catch (error) {
    console.log(error)
  }
}