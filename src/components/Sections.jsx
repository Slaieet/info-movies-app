import NavButton from '../icons/components/NavButton'
import Genre from './subcomponents/Genre'

import { createPortal } from 'react-dom'

export default function Sections ({ genres, refSections, toggleSections, changeMoviesByGenre }) {
  return createPortal(
    <aside
      className='principal-aside absolute top-0 left-0 h-screen px-[30px] py-[22px] bg-darkbgTwo
      overflow-auto'
      ref={refSections}
    >
      <header className='flex items-center gap-5 pb-5'>
        <NavButton toggleSections={toggleSections} mirror />
        <h2 className='font-bold text-[1.5rem]'>Movie App</h2>
      </header>
      <nav>
        <ul className='flex flex-col gap-3'>
          {(genres) && genres.map(genre => {
            return (
              <Genre
                key={genre.id}
                nameGenre={genre.name}
                changeMoviesByGenre={changeMoviesByGenre}
                genreID={genre.id}
                toggleSections={toggleSections}
              />
            )
          })}
        </ul>
      </nav>
    </aside>,
    document.getElementById('aside')
  )
}