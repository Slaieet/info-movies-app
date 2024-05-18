import { useExtractMoviesInfo } from '../customHooks/useExtractMoviesInfo'
import NavButton from '../icons/components/NavButton'
import Genre from './subcomponents/Genre'
import genresIcon from '../icons/genres.svg'
import homeIcon from '../icons/home.svg'

import { createPortal } from 'react-dom'

export default function Sections ({ refSections, toggleSections }) {
  const { genres } = useExtractMoviesInfo()

  return createPortal(
    <div
      className='container-aside absolute h-screen w-full flex top-0 left-0'
      ref={refSections}
    >
      <aside
        className='principal-aside px-[30px] py-[22px] bg-darkbgTwo
        overflow-auto'
      >
        <header className='flex items-center gap-5 pb-5'>
          <NavButton toggleSections={toggleSections} mirror />
          <h2 className='font-bold text-[1.5rem]'>Movie App</h2>
        </header>
        <nav>
          <ul className='flex flex-col gap-4'>
            <Genre
              nameGenre='Home'
              toggleSections={toggleSections}
              icon={homeIcon}
              genreID={null}
            />
            {(genres) && genres.map(genre => {
              return (
                <Genre
                  key={genre.id}
                  nameGenre={genre.name}
                  genreID={genre.id}
                  toggleSections={toggleSections}
                  icon={genresIcon}
                />
              )
            })}
          </ul>
        </nav>
      </aside>
      <div className='grow' onClick={toggleSections} />
    </div>,
    document.getElementById('aside')
  )
}
