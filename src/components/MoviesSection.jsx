import MovieCard from './subcomponents/MovieCard'
import MovieInfo from './subcomponents/MovieInfo'
import { useExtractFullInfo } from '../customHooks/useExtractFullInfo.js'

export default function MoviesSection ({ moviesToRender, genres }) {
  const { showInfo, info, changeShowInfo } = useExtractFullInfo({ moviesToRender, genres })

  return (
    <section className='movies-section'>
      {moviesToRender &&
            moviesToRender.map((movie) => {
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
