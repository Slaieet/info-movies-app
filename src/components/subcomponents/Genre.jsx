import actionIcon from '../../icons/action.svg'

export default function Genre ({ nameGenre }) {
  return (
    <li className='py-2 flex gap-2 items-cente rounded-md hover:bg-slate-600 genre cursor-pointer'>
      <img src={actionIcon} className='h-[25px]' />
      <strong>{nameGenre}</strong>
    </li>
  )
}
