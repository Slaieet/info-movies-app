export default function MovieCard () {
  return (
    <div className='w-[300px]'>
      <header>
        <img
          src='https://image.tmdb.org/t/p/w1280/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'
          alt='movie'
          className='w-full h-[420px] object-cover rounded-t-[10px]'
          loading='lazy'
        />
      </header>
      <footer
        className='h-[100px] bg-darkbgTwo rounded-b-[10px] flex items-center justify-between px-5'
      >
        <h6 className='font-bold text-[1.2rem]'>Kung Fu Panda 4</h6>
        <p className='px-2 py-1 bg-darkbg text-[#ffa500] font-bold'>6.7</p>
      </footer>
    </div>
  )
}
