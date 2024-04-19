import { useState } from 'react'
import sendIcon from '../icons/send.svg'

import NavButton from '../icons/components/NavButton'

export default function Headerr ({ changeMoviesRender, toggleSections }) {
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
    <header className='h-[70px] flex justify-between items-center principal-header sticky top-0 bg-darkbg gap-4'>

      <div className='flex items-center gap-5'>
        <NavButton toggleSections={toggleSections} />

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
            ? 'h-[25px] absolute right-3 inline-block cursor-pointer'
            : 'hidden'}
          onClick={onClickSend}
        />
      </div>
    </header>
  )
}
