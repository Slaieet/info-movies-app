import { IMG_PATH } from '../../logic/constants'

export default function MovieCard ({ title, qualification, imgEndpoint }) {
  return (
    <div
      className='w-[300px] cursor-pointer movie-card border-[3px] border-transparent hover:border-darktext
      rounded-[12px]'
    >
      <header>
        <img
          src={IMG_PATH + imgEndpoint}
          alt={`Portada de la pelicula "${title}"`}
          className='w-full h-[420px] object-cover rounded-t-[10px]'
          loading='lazy'
        />
      </header>
      <footer
        className='h-[100px] bg-darkbgTwo rounded-b-[10px] flex items-center justify-between px-5 movie-card_footer'
      >
        <h6 className='font-bold text-[1.2rem]'>{title}</h6>
        <p className='px-2 py-1 bg-darkbg text-[#ffa500] font-bold'>{qualification}</p>
      </footer>
    </div>
  )
}
