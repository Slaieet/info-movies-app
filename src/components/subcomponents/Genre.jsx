import genresIcon from '../../icons/genres.svg'

export default function Genre ({ nameGenre, changeMoviesByGenre, genreID, toggleSections }) {
  const onSelectGenre = () => {
    changeMoviesByGenre({ genreID })
    toggleSections({ newGenre: true })
  }

  return (
    <li
      className='py-2 flex gap-2 items-center rounded-md hover:bg-slate-600 genre cursor-pointer'
      onClick={onSelectGenre}
    >
      <img src={genresIcon} className='h-[25px] opacity-75' />
      <strong className='text-[1.1rem]'>{nameGenre}</strong>
    </li>
  )
}
