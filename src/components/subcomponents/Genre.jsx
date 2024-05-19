import { useExtractMoviesInfo } from '../../customHooks/useExtractMoviesInfo'

export default function Genre ({ nameGenre, genreID, toggleSections, icon, otherAction }) {
  const { changeMoviesByGenre } = useExtractMoviesInfo()

  const onSelectGenre = () => {
    (!otherAction) ? changeMoviesByGenre({ genreID }) : otherAction()
    toggleSections({ newGenre: true })
  }

  return (
    <li
      className='py-2 flex gap-2 items-center rounded-md hover:bg-slate-600 genre cursor-pointer px-1'
      onClick={onSelectGenre}
    >
      <img src={icon} className='h-[25px] opacity-75' />
      <strong className='text-[1.1rem]'>{nameGenre}</strong>
    </li>
  )
}
