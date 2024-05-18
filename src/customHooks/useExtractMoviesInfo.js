import { useContext } from 'react'
import { moviesContext } from '../context/moviesContext'

const useExtractMoviesInfo = () => {
  const moviesInfo = useContext(moviesContext)

  return moviesInfo
}

export { useExtractMoviesInfo }
