import Footerr from './components/Footerr'
import Headerr from './components/Headerr'
import MoviesSection from './components/MoviesSection'
import Sections from './components/Sections.jsx'
import InError from './components/InError.jsx'

import { useExtractMoviesInfo } from './customHooks/useExtractMoviesInfo.js'
import { useShowSections } from './customHooks/useShowSections.js'

export default function App () {
  const { moviesToRender, genres, changeMoviesRender, changeMoviesByGenre, loading, error } = useExtractMoviesInfo()
  const { refSections, toggleSections } = useShowSections()

  if (error) return <InError />

  return (
    <>
      <Headerr changeMoviesRender={changeMoviesRender} toggleSections={toggleSections} />
      <main>
        <MoviesSection moviesToRender={moviesToRender} genres={genres} loading={loading} />
      </main>
      <Sections genres={genres} refSections={refSections} toggleSections={toggleSections} changeMoviesByGenre={changeMoviesByGenre} />
      <Footerr />
    </>
  )
}
