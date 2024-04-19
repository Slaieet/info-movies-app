import actionIcon from '../../icons/action.svg'

export default function Genre ({ nameGenre, changeMoviesByGenre, genreID, toggleSections }) {
  const onSelectGenre = () => {
    changeMoviesByGenre({ genreID })
    toggleSections({ newGenre: true })
  }

  return (
    <li
      className='py-2 flex gap-2 items-cente rounded-md hover:bg-slate-600 genre cursor-pointer'
      onClick={onSelectGenre}
    >
      <img src={actionIcon} className='h-[25px]' />
      <strong>{nameGenre}</strong>
    </li>
  )
}
