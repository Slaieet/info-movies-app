import { useState, useEffect, useRef } from 'react'

const useShowSections = () => {
  const [showSections, setShowSections] = useState(false)
  const refSections = useRef(null)
  const divRoot = document.getElementById('root')
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    if (showSections) {
      setPositionY(window.scrollY)
      refSections.current.style.transform = 'translateX(0px)'
      divRoot.style.filter = 'blur(10px)'
      divRoot.style.height = '100vh'
      divRoot.style.overflow = 'hidden'
    } else {
      refSections.current.style.transform = 'translateX(-250px)'
      divRoot.style.filter = 'blur(0px)'
      divRoot.style.height = 'auto'
      divRoot.style.overflow = 'visible'
      document.documentElement.scrollTop = positionY
    }
  }, [showSections])

  const toggleSections = () => {
    setShowSections(!showSections)
  }

  return {
    refSections,
    toggleSections
  }
}

export { useShowSections }
