export default function Headerr () {
  return (
    <header className='h-[80px] flex justify-end items-center principal-header'>
      <input
        type='text'
        className='h-[40px] w-[250px] bg-darkbgTwo rounded-[20px] px-4 flex items-center border-[2px]
        border-solid border-transparent focus:border-darktext search-bar pb-[1px]'
        placeholder='Buscar'
      />
    </header>
  )
}
