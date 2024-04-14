import { useState, useEffect } from 'react'

import { extractMoviesInfo, extractGenres } from '../logic/services.js'
import { API_URL_SEARCH } from '../logic/constants.js'

const useExtractMoviesInfo = () => {
  const [moviesToRender, setMoviesToRender] = useState()
  const [genres, setGenres] = useState()

  useEffect(() => {
    Promise.all([extractMoviesInfo(), extractGenres()])
      .then(res => {
        setMoviesToRender(res[0].results)
        setGenres(res[1])
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const changeMoviesRender = ({ search }) => {
    const finalURL = API_URL_SEARCH + search
    extractMoviesInfo(finalURL).then(res => {
      setMoviesToRender(res.results)
    }).catch(err => {
      console.log(err)
    })
  }

  return {
    moviesToRender,
    genres,
    changeMoviesRender
  }
}

export { useExtractMoviesInfo }
