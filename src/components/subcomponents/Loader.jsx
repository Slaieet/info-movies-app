import { createPortal } from 'react-dom'

export default function Loader () {
  return createPortal(
    <span className='loader' />,
    document.getElementById('loader')
  )
}
