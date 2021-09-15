import React from 'react'

export const useMousePosition = () => {
  let [mousePosition, setMousePosition] = React.useState({ x: null, y: null })

  React.useEffect(() => {
    function handlePosition(e: { pageX: any; pageY: any }) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener('mousemove', handlePosition)
    return () => window.removeEventListener('mousemove', handlePosition)
  }, [])

  return mousePosition
}
