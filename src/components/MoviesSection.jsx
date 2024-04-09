import MovieCard from './subcomponents/MovieCard'
import MovieInfo from './subcomponents/MovieInfo'
import { useExtractMoviesInfo } from '../customHooks/extractMoviesInfo'
import { useState } from 'react'

export default function MoviesSection () {
  const { moviesToRender } = useExtractMoviesInfo()

  // const [showInfo, setShowInfo] = useState(false)
  // const [info, setInfo] = useState('')

  // const changeShowInfo = ({ info }) => {

  // }

  return (
    <section className='movies-section'>
      {moviesToRender &&
            moviesToRender.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  qualification={movie.vote_average}
                  imgEndpoint={movie.poster_path}
                />
              )
            })}

      {/* {showInfo &&
        <MovieInfo />} */}

    </section>
  )
}
