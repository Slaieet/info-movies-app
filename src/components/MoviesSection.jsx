import MovieCard from './subcomponents/MovieCard'
import MovieInfo from './subcomponents/MovieInfo'
import { useExtractFullInfo } from '../customHooks/useExtractFullInfo.js'
import Loader from './subcomponents/Loader.jsx'
import { useExtractMoviesInfo } from '../customHooks/useExtractMoviesInfo.js'

export default function MoviesSection () {
  const { moviesToRender, genres, loading } = useExtractMoviesInfo()
  const { showInfo, info, changeShowInfo } = useExtractFullInfo({ moviesToRender, genres })

  return (
    <section className='movies-section min-h-screen'>
      {loading
        ? <Loader />
        : moviesToRender.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              qualification={movie.vote_average}
              imgEndpoint={movie.poster_path}
              changeShowInfo={changeShowInfo}
            />
          )
        })}

      {showInfo &&
        <MovieInfo info={info} changeShowInfo={changeShowInfo} />}

    </section>
  )
}
