import { useContext } from 'react'
import { savedMoviesContext } from '../context/savedMoviesContext'

export const useSavedMovies = () => {
  const savedMovies = useContext(savedMoviesContext)

  return savedMovies
}
