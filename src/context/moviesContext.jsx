import { createContext, useState, useRef, useEffect } from 'react'

import { extractMoviesInfo, extractGenres } from '../logic/services'
import { API_URL, API_URL_SEARCH } from '../logic/constants'

export const moviesContext = createContext()

export const MoviesContextProvider = ({ children }) => {
  const [moviesToRender, setMoviesToRender] = useState()
  const [genres, setGenres] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const previousSearch = useRef('')

  useEffect(() => {
    Promise.all([extractMoviesInfo(), extractGenres()])
      .then(res => {
        setMoviesToRender(res[0].results)
        setGenres(res[1])
        setLoading(false)
      }).catch(() => {
        setError(true)
      })
  }, [])

  const changeMoviesRender = ({ search }) => {
    if (previousSearch.current === search) return

    setLoading(true)
    previousSearch.current = search
    const finalURL = API_URL_SEARCH + search
    extractMoviesInfo(finalURL).then(res => {
      setMoviesToRender(res.results)
      setLoading(false)
    }).catch(() => {
      setError(true)
    })
  }

  const changeMoviesByGenre = ({ genreID }) => {
    setLoading(true)
    const finalURL = API_URL + `&with_genres=${genreID}`
    extractMoviesInfo(finalURL).then(res => {
      setMoviesToRender(res.results)
      setLoading(false)
    }).catch(() => {
      setError(true)
    })
  }

  const changeMoviesToHome = () => {
    setLoading(true)
    extractMoviesInfo().then(res => {
      setMoviesToRender(res.results)
      setLoading(false)
    }).catch(() => {
      setError(true)
    })
  }

  return (
    <moviesContext.Provider value={{
      moviesToRender,
      genres,
      changeMoviesRender,
      changeMoviesByGenre,
      changeMoviesToHome,
      loading,
      error
    }}
    >
      {children}
    </moviesContext.Provider>
  )
}
