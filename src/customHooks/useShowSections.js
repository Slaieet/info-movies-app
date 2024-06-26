import { useState, useRef } from 'react'

const useShowSections = () => {
  const [showSections, setShowSections] = useState(false)
  const refSections = useRef(null)
  const divRoot = document.getElementById('root')
  const [positionY, setPositionY] = useState(0)

  const toggleSections = ({ newGenre = false }) => {
    if (newGenre) {
      refSections.current.style.transform = 'translateX(-100%)'
      divRoot.style.filter = 'blur(0px)'
      divRoot.style.height = 'auto'
      divRoot.style.overflow = 'visible'
      setShowSections(!showSections)
      return
    }

    if (!showSections) {
      setPositionY(window.scrollY)
      refSections.current.style.transform = 'translateX(0)'
      divRoot.style.filter = 'blur(10px)'
      divRoot.style.height = '100vh'
      divRoot.style.overflow = 'hidden'
    } else {
      refSections.current.style.transform = 'translateX(-100%)'
      divRoot.style.filter = 'blur(0px)'
      divRoot.style.height = 'auto'
      divRoot.style.overflow = 'visible'
      document.documentElement.scrollTop = positionY
    }

    setShowSections(!showSections)
  }

  return {
    refSections,
    toggleSections,
    showSections
  }
}

export { useShowSections }
