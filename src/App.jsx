import Footerr from './components/Footerr'
import Headerr from './components/Headerr'
import MoviesSection from './components/MoviesSection'
import Sections from './components/Sections.jsx'
import InError from './components/InError.jsx'

import { useExtractMoviesInfo } from './customHooks/useExtractMoviesInfo.js'
import { useShowSections } from './customHooks/useShowSections.js'

export default function App () {
  const { error } = useExtractMoviesInfo()
  const { refSections, toggleSections } = useShowSections()

  if (error) return <InError />

  return (
    <>
      <Headerr toggleSections={toggleSections} />
      <main>
        <MoviesSection />
      </main>
      <Sections refSections={refSections} toggleSections={toggleSections} />
      <Footerr />
    </>
  )
}
