import { useState, useEffect } from 'react'

import { extractMoviesInfo, extractGenres } from '../logic/services.js'

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

  return {
    moviesToRender,
    genres
  }
}

export { useExtractMoviesInfo }
