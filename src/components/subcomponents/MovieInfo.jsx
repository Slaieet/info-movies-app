import { createPortal } from 'react-dom'

export default function MovieInfo () {
  return createPortal(
    <section className='center-absolute w-[80%] bg-darkbgTwo flex'>
      <header className='h-full w-[325px] bg-purple-300 shrink-0'>
        <img
          src='https://image.tmdb.org/t/p/w1280/2YqZ6IyFk7menirwziJvfoVvSOh.jpg'
          alt='movie'
          className='w-full min-h-[500px] object-cover'
        />
      </header>
      <article className='min-h-[500px] grow-[1] p-5 relative'>

        <div>
          <h6 className='text-[1.5rem] text-center font-bold'>Antes de perderteeee</h6>
          <ul className='flex justify-evenly mt-6 opacity-90'>
            <li>
              Accion
            </li>
            <li>
              Aventura
            </li>
            <li>Locura</li>
          </ul>

        </div>

        <p className='mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium illum vel exercitationem. Cupiditate, molestiae nesciunt nihil dolorem id iure iste sint sunt delectus quae, vero facilis vitae quam nulla at.</p>

        <footer className='absolute w-[90%] bottom-5 flex justify-evenly text-[0.9rem]'>
          <p>Fecha de lanzamiento: 2024-03-02</p>
          <p>Promedio de votos: 6.555</p>
        </footer>

      </article>
    </section>,
    document.getElementById('movie-info')
  )
}
