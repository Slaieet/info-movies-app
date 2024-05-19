import { createContext, useState, useEffect } from 'react'
import { useExtractMoviesInfo } from '../customHooks/useExtractMoviesInfo'

export const savedMoviesContext = createContext()

export const ListOfMoviesProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([])

  const { changeMoviesSpecific } = useExtractMoviesInfo()

  useEffect(() => {
    const list = window.localStorage.getItem('savedMovies')

    if (!list) {
      window.localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
    } else {
      setSavedMovies(JSON.parse(list))
    }
  }, [])

  const toggleMovieToList = ({ movie }) => {
    const newSavedMovies = structuredClone(savedMovies)

    const indexMovie = newSavedMovies.findIndex(item => item.id === movie.id)

    if (indexMovie >= 0) {
      newSavedMovies.splice(indexMovie, 1)
    } else {
      newSavedMovies.push(movie)
    }

    window.localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies))
    setSavedMovies(newSavedMovies)
  }

  const showMoviesInList = () => {
    changeMoviesSpecific({ movies: savedMovies })
  }

  const checkIfSaved = ({ id }) => {
    return savedMovies.some(item => item.id === id)
  }

  return (
    <savedMoviesContext.Provider value={{
      showMoviesInList,
      toggleMovieToList,
      checkIfSaved,
      savedMovies
    }}
    >
      {children}
    </savedMoviesContext.Provider>
  )
}
