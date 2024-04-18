export default function NavButton ({ toggleSections, mirror = false }) {
  const classNavButton = 'bg-darktext h-[2px] w-full rounded-[5px] origin-left'
  const classCage = 'flex flex-col h-[14px] w-[18px] justify-between box-content p-[5px]'

  return (
    <button
      className={(!mirror) ? `nav-button ${classCage}` : `nav-button-mirror ${classCage}`}
      onClick={toggleSections}
    >
      <div className={classNavButton} />
      <div className={classNavButton} />
      <div className={classNavButton} />
    </button>
  )
}
