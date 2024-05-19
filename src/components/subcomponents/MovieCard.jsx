import { IMG_PATH } from '../../logic/constants'
import addIcon from '../../icons/add.svg'
import removeIcon from '../../icons/remove.svg'
import { useSavedMovies } from '../../customHooks/useSavedMovies'
import { useCallback } from 'react'
import { isMobile } from 'react-device-detect'

export default function MovieCard ({ title, qualification, imgEndpoint, changeShowInfo, id, movie }) {
  const { toggleMovieToList, checkIfSaved, savedMovies } = useSavedMovies()

  const isSaved = useCallback(checkIfSaved({ id }), [savedMovies])

  return (
    <div
      className='w-[300px] cursor-pointer movie-card border-[3px] border-transparent hover:border-darktext
      rounded-[12px] relative'
      onClick={() => changeShowInfo({ id })}
    >
      <header className='h-[420px]'>
        <img
          src={IMG_PATH + imgEndpoint}
          alt={`Portada de la pelicula "${title}"`}
          className='w-full h-full object-cover rounded-t-[10px]'
          loading='lazy'
        />
      </header>
      <footer
        className='h-[100px] bg-darkbgTwo rounded-b-[10px] flex items-center justify-between px-5 movie-card_footer gap-1'
      >
        <h6 className='font-bold text-[1.2rem] max-h-[90%] overflow-hidden'>{title}</h6>
        <p className='px-2 py-1 bg-darkbg text-[#ffa500] font-bold'>{qualification}</p>
      </footer>
      <button
        className={(isMobile)
          ? 'add-icon absolute top-3 left-3 p-1 bg-darkbgTwo rounded-lg hover:bg-darkbg'
          : 'hidden add-icon absolute top-3 left-3 p-1 bg-darkbgTwo rounded-lg hover:bg-darkbg'}
        onClick={(event) => {
          event.stopPropagation()
          toggleMovieToList({ movie })
        }}
      >
        <img src={(isSaved) ? removeIcon : addIcon} alt={(isSaved ? 'Guardar' : 'Eliminar')} className='h-6' />
      </button>
    </div>
  )
}
