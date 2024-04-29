import { useState, useEffect } from 'react'

import { extractMoviesInfo, extractGenres } from '../logic/services.js'
import { API_URL, API_URL_SEARCH } from '../logic/constants.js'

const useExtractMoviesInfo = () => {
  const [moviesToRender, setMoviesToRender] = useState()
  const [genres, setGenres] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
    setLoading(true)
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

  return {
    moviesToRender,
    genres,
    changeMoviesRender,
    changeMoviesByGenre,
    loading,
    error
  }
}

export { useExtractMoviesInfo }
