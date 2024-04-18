import Footerr from './components/Footerr'
import Headerr from './components/Headerr'
import MoviesSection from './components/MoviesSection'
import Sections from './components/Sections.jsx'

import { useExtractMoviesInfo } from './customHooks/useExtractMoviesInfo.js'
import { useShowSections } from './customHooks/useShowSections.jsx'

export default function App () {
  const { moviesToRender, genres, changeMoviesRender } = useExtractMoviesInfo()
  const { refSections, toggleSections } = useShowSections()

  return (
    <>
      <Headerr changeMoviesRender={changeMoviesRender} toggleSections={toggleSections} />
      <main>
        <MoviesSection moviesToRender={moviesToRender} genres={genres} />
      </main>
      <Sections genres={genres} refSections={refSections} toggleSections={toggleSections} />
      <Footerr />
    </>
  )
}
