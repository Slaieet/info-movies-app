export default function Headerr ({ changeMoviesRender }) {
  const onClickEnter = (event) => {
    if (event.keyCode === 13) {
      changeMoviesRender({ search: event.target.value })
    }
  }

  return (
    <header className='h-[80px] flex justify-end items-center principal-header'>
      <input
        type='text'
        className='h-[40px] w-[250px] bg-darkbgTwo rounded-[20px] px-4 flex items-center border-[2px]
        border-solid border-transparent focus:border-darktext search-bar pb-[1px]'
        placeholder='Buscar'
        onKeyUp={onClickEnter}
      />
    </header>
  )
}
