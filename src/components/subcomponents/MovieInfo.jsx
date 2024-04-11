import { createPortal } from 'react-dom'
import { IMG_PATH } from '../../logic/constants.js'

export default function MovieInfo ({ info }) {
  return createPortal(
    <section className='center-absolute w-[80%] bg-darkbgTwo flex'>
      <header className='h-full w-[325px] bg-purple-300 shrink-0'>
        <img
          src={IMG_PATH + info.imgEndpoint}
          alt='movie'
          className='w-full min-h-[500px] object-cover'
        />
      </header>
      <article className='min-h-[500px] grow-[1] p-5 relative'>

        <div>
          <h6 className='text-[1.5rem] text-center font-bold'>{info.title}</h6>
          <ul className='flex justify-evenly mt-6 opacity-90'>
            {(info.genresNames).map(genre => {
              return (
                <li key={genre.id}>{genre.name}</li>
              )
            })}
          </ul>

        </div>

        <p className='mt-10'>{info.overview}</p>

        <footer className='absolute w-[90%] bottom-5 flex justify-evenly text-[0.9rem]'>
          <p>Fecha de lanzamiento: {info.release__date}</p>
          <p>Promedio de votos: {info.vote_average}</p>
        </footer>

      </article>
    </section>,
    document.getElementById('movie-info')
  )
}
