import MovieCard from './subcomponents/MovieCard'
import { useExtractMoviesInfo } from '../customHooks/extractMoviesInfo'

export default function MoviesSection () {
  const { moviesToRender } = useExtractMoviesInfo()

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
    </section>
  )
}
