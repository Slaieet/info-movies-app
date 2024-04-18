import NavButton from '../icons/components/NavButton'
import Genre from './subcomponents/Genre'

import { createPortal } from 'react-dom'

export default function Sections ({ genres, refSections, toggleSections }) {
  return createPortal(
    <aside
      className='principal-aside absolute top-0 left-0 h-screen px-[30px] py-[22px] bg-darkbgTwo
      overflow-auto'
      ref={refSections}
    >
      <header className='flex items-center gap-5 pb-5'>
        <NavButton toggleSections={toggleSections} mirror />
        <h1 className='font-bold text-[1.5rem]'>Movie App</h1>
      </header>
      <nav>
        <ul className='flex flex-col gap-3'>
          {(genres) && genres.map(genre => {
            return (
              <Genre key={genre.id} nameGenre={genre.name} />
            )
          })}
        </ul>
      </nav>
    </aside>,
    document.getElementById('aside')
  )
}
