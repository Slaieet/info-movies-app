import Footerr from './components/Footerr'
import Headerr from './components/Headerr'
import MoviesSection from './components/MoviesSection'

import { useExtractMoviesInfo } from './customHooks/useExtractMoviesInfo.js'

export default function App () {
  const { moviesToRender, genres, changeMoviesRender } = useExtractMoviesInfo()

  return (
    <>
      <Headerr changeMoviesRender={changeMoviesRender} />
      <main>
        <MoviesSection moviesToRender={moviesToRender} genres={genres} />
      </main>
      <Footerr />
    </>
  )
}
