import { useState } from 'react'

const useExtractFullInfo = ({ genres }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [info, setInfo] = useState()
  const divRoot = document.getElementById('root')
  const [positionY, setPositionY] = useState(0)

  const obtainGeneresNames = (generesIDs) => {
    const result = genres.filter(genre => generesIDs.includes(genre.id))
    return result
  }

  const changeShowInfo = ({ movie, close }) => {
    if (close) {
      setShowInfo(false)
      divRoot.style.filter = 'blur(0px)'
      divRoot.style.height = 'auto'
      divRoot.style.overflow = 'visible'
      document.documentElement.scrollTop = positionY
      return
    }

    setPositionY(window.scrollY)

    divRoot.style.filter = 'blur(10px)'
    divRoot.style.height = '100vh'
    divRoot.style.overflow = 'hidden'

    const genresNames = obtainGeneresNames(movie.genre_ids)

    const data = {
      imgEndpoint: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      release__date: movie.release_date,
      vote_average: movie.vote_average,
      backdrop_path: movie.backdrop_path,
      genresNames
    }
    setInfo(data)
    setShowInfo(true)
  }

  return {
    showInfo,
    info,
    changeShowInfo
  }
}

export { useExtractFullInfo }
