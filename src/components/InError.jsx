import { createPortal } from 'react-dom'

export default function InError () {
  const reloadPage = () => {
    window.location.reload()
  }

  return createPortal(
    <section className='h-screen min-h-[500px] w-full top-0 left-0 flex flex-col justify-center items-center gap-10'>
      <h3 className='text-[2rem] text-center'>Ups, ha ocurrido un error al cargar la información</h3>

      <button className='py-2 px-5 rounded-md bg-gray-700 hover:bg-gray-600' onClick={reloadPage}>Recargar</button>
    </section>,
    document.getElementById('inError')
  )
}
