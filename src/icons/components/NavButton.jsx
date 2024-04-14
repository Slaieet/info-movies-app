export default function NavButton () {
  const classNavButton = 'bg-darktext h-[2px] w-full rounded-[5px] origin-left'

  return (
    <button
      className='nav-button flex flex-col h-[16px] w-[20px] justify-between box-content p-[5px]'
    >
      <div className={classNavButton} />
      <div className={classNavButton} />
      <div className={classNavButton} />
    </button>
  )
}
