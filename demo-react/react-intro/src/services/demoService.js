import {fetchFuturama} from "../api/demoFuturamaApi";

export const demoService = {
    getCharacters: () => fetchFuturama.characters,
    getEpisodes: () => fetchFuturama.episodes
};