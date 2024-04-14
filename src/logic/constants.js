const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'
const API_LANGUAGE = 'language=es'

export const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&${API_LANGUAGE}`
export const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&${API_LANGUAGE}&query=%22`
export const API_GENRES_LIST = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${API_KEY}&${API_LANGUAGE}`

export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
