import { useState } from 'react'

const useExtractFullInfo = ({ moviesToRender, genres }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [info, setInfo] = useState()

  const obtainGeneresNames = (generesIDs) => {
    const result = genres.filter(genre => generesIDs.includes(genre.id))
    return result
  }

  const changeShowInfo = ({ id }) => {
    const originalMovies = [...moviesToRender]
    const index = originalMovies.findIndex(movie => movie.id === id)

    const movie = originalMovies[index]

    const genresNames = obtainGeneresNames(movie.genre_ids)

    const data = {
      imgEndpoint: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      release__date: movie.release_date,
      vote_average: movie.vote_average,
      genresNames
    }
    setInfo(data)
    setShowInfo(!showInfo)
  }

  return {
    showInfo,
    info,
    changeShowInfo
  }
}

export { useExtractFullInfo }
