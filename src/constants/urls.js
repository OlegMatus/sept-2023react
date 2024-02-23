const baseURL = 'https://rickandmortyapi.com/api';

const characters = '/character';
const episodes = '/episode';

const urls = {
    episodes: {
        base: episodes,
        byId: (id) => `${episodes}/${id}`
    },
    characters: {
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {
    baseURL,
    urls
}