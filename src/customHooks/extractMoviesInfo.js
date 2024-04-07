import { useState, useEffect } from 'react'

import { extractMoviesInfo } from '../logic/services.js'

const useExtractMoviesInfo = () => {
  const [moviesToRender, setMoviesToRender] = useState('')

  useEffect(() => {
    extractMoviesInfo().then((data) => {
      setMoviesToRender(data.results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return {
    moviesToRender
  }
}

export { useExtractMoviesInfo }
