import { useState, useEffect, useRef } from 'react'

const useShowSections = () => {
  const [showSections, setShowSections] = useState(false)
  const refSections = useRef(null)

  useEffect(() => {
    (showSections)
      ? refSections.current.style.transform = 'translateX(0px)'
      : refSections.current.style.transform = 'translateX(-250px)'
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
