import { createPortal } from 'react-dom'
import { IMG_PATH } from '../../logic/constants.js'

export default function MovieInfo ({ info }) {
  return createPortal(
    <div
      className='h-full min-h-[600px] w-full absolute top-0 left-0 bg-red-500 flex justify-center
      items-center z-[150]'
    >
      <section className='w-[80%] h-[500px] bg-darkbgTwo flex z-[100]'>
        <header className='w-[325px] h-full shrink-0 self-center'>
          <img
            src={IMG_PATH + info.imgEndpoint}
            alt='movie'
            className='w-full h-full object-cover'
          />
        </header>
        <article className='grow-[1] p-5 relative h-full flex flex-col justify-between gap-8 overflow-y-auto'>

          <div className='shrink-0'>
            <h6 className='text-[1.5rem] text-center font-bold'>{info.title}</h6>
            <ul className='flex justify-evenly opacity-90 mt-6'>
              {(info.genresNames).map(genre => {
                return (
                  <li key={genre.id}>{genre.name}</li>
                )
              })}
            </ul>

          </div>

          <div className='grow-[1]'>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eveniet magni sit itaque, enim non similique ea fugiat officia quia beatae praesentium? Vitae ipsam quia quod laboriosam commodi numquam ad.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam pariatur, quam facere odio eaque architecto eius amet dignissimos explicabo illum possimus ea quas, quaerat commodi obcaecati nulla ad debitis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto aliquam. Distinctio asperiores, assumenda culpa ea saepe beatae quibusdam harum, eos vitae magnam aliquid non! Veniam ipsam error quae perferendis?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat debitis et distinctio! Explicabo expedita aliquid ea voluptas error? Eaque placeat deleniti consequatur quis odio unde hic? Facere iusto vitae obcaecati
            </p>
          </div>

          <footer className='flex justify-evenly text-[0.9rem] shrink-0'>
            <p>Fecha de lanzamiento: {info.release__date}</p>
            <p>Promedio de votos: {info.vote_average}</p>
          </footer>

        </article>
      </section>
    </div>,
    document.getElementById('movie-info')
  )
}
