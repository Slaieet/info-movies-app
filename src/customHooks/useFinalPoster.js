import { useEffect, useState } from 'react'

const useFinalPoster = ({ info }) => {
  const [finalPoster, setFinalPoster] = useState(() => {
    const width = window.innerWidth
    return (width > 1000) ? info.imgEndpoint : info.backdrop_path
  })

  useEffect(() => {
    const match = window.matchMedia('(max-width: 1000px)')

    const watchMatch = (val) => {
      if (val.matches) setFinalPoster(info.backdrop_path)
      else setFinalPoster(info.imgEndpoint)
    }

    match.addEventListener('change', watchMatch)

    return () => {
      match.removeEventListener('change', watchMatch)
    }
  }, [])

  return {
    finalPoster
  }
}

export { useFinalPoster }
