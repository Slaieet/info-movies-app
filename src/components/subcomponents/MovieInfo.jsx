import { createPortal } from 'react-dom'
import { IMG_PATH } from '../../logic/constants.js'
import closeIcon from '../../icons/close.svg'
import { useFinalPoster } from '../../customHooks/useFinalPoster.js'

export default function MovieInfo ({ info, changeShowInfo }) {
  const { finalPoster } = useFinalPoster({ info })

  return createPortal(
    <div
      className='cage-movie-info h-full min-h-[600px] w-full absolute top-0 left-0 flex justify-center
      items-center z-[150]'
    >
      <section className='subcage-movie-info w-[80%] h-[500px] bg-darkbgTwo flex z-[100] relative rounded-[12px]'>
        <header className='w-[325px] h-full shrink-0 self-center'>
          <img
            src={IMG_PATH + finalPoster}
            alt='movie'
            className='w-full h-full object-cover rounded-l-[12px] poster'
          />
        </header>
        <article className='grow-[1] p-5 relative h-full flex flex-col justify-between gap-8 overflow-y-auto'>

          <div className='shrink-0'>
            <h6 className='text-[1.5rem] text-center font-bold'>{info.title}</h6>
            <ul className='flex justify-evenly gap-x-10 gap-y-5 flex-wrap opacity-90 mt-6'>
              {(info.genresNames).map(genre => {
                return (
                  <li key={genre.id}>{genre.name}</li>
                )
              })}
            </ul>

          </div>

          <div className='grow-[1]'>
            <p className=''>{info.overview}</p>
          </div>

          <footer className='date-info flex justify-evenly text-[0.9rem] shrink-0'>
            <p className='release-date'>Fecha de lanzamiento: {info.release__date}</p>
            <p className='vote-average'>Promedio de votos: {info.vote_average}</p>
          </footer>

        </article>

        <button
          className='absolute right-[15px] top-[15px]'
          onClick={() => changeShowInfo({ close: true })}
        >
          <img src={closeIcon} className='h-[35px]' alt='cerrar' />
        </button>
      </section>
    </div>,
    document.getElementById('movie-info')
  )
}
