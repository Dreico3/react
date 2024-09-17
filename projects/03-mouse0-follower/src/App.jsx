import { useState } from "react"
import { useEffect } from "react"
function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  //pointer move
  useEffect(() => {
    console.log('efecto', enabled)
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove ', { clientX, clientY });
      setPosition({ x: clientX, y: clientY })

    }
    if (enabled) {
      console.log('entre>>.')
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  //change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}></div>
      <h3>proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'activar'} segir el puntero
      </button>
    </>
  )
}

export default App
