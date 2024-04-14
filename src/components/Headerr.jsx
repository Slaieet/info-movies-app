import { useState } from 'react'
import sendIcon from '../icons/send.svg'

import NavButton from '../icons/components/NavButton'

export default function Headerr ({ changeMoviesRender }) {
  const [search, setSearch] = useState('')
  const [inputActive, setInputActive] = useState(false)

  const onClickEnter = (event) => {
    const valueSearch = (event.target.value).trim()
    if (event.keyCode === 13 && valueSearch !== '') {
      changeMoviesRender({ search: valueSearch })
    }
  }

  const onClickSend = () => {
    if (search !== '') changeMoviesRender({ search })
  }

  const onChangeSearchValue = (e) => {
    const valueSearch = (e.target.value).trim()
    setSearch(valueSearch)

    ;(valueSearch.length === 0)
      ? setInputActive(false)
      : setInputActive(true)
  }

  return (
    <header className='h-[80px] flex justify-between items-center principal-header'>

      <div className='flex items-center gap-5'>
        <NavButton />

        <h1 className='font-bold text-[1.5rem]'>Movie App</h1>
      </div>

      <div className='h-[40px] w-[270px] relative flex items-center'>
        <input
          type='text'
          className='h-full w-full bg-darkbgTwo rounded-[20px] px-4 flex items-center border-[2px]
          border-solid border-transparent focus:border-darktext search-bar pb-[1px]'
          placeholder='Buscar'
          onKeyUp={onClickEnter}
          onChange={onChangeSearchValue}
        />
        <img
          src={sendIcon} alt='send'
          className={(inputActive)
            ? 'h-[25px] absolute right-3 opacity-100 cursor-pointer'
            : 'h-[25px] absolute right-3 opacity-60 cursor-pointer'}
          onClick={onClickSend}
        />
      </div>
    </header>
  )
}
