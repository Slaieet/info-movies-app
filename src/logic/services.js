import { API_URL } from './constants.js'

export const extractMoviesInfo = async () => {
  const res = await fetch(API_URL)
  const pageOfMovies = await res.json()
  return pageOfMovies
}
