import { API_URL, API_GENRES_LIST } from './constants.js'

export const extractMoviesInfo = async (url = API_URL) => {
  const res = await fetch(url)
  const pageOfMovies = await res.json()
  return pageOfMovies
}

export const extractGenres = async () => {
  const res = await fetch(API_GENRES_LIST)
  const genres = await res.json()

  return genres.genres
}
