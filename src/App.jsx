import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Debug: log imported asset URLs
  console.log('reactLogo ->', reactLogo)
  console.log('viteLogo ->', viteLogo)
  console.log('heroImg ->', heroImg)

  const onImgError = (e) => {
    console.error('Image failed to load:', e.target.src)
  }

  return (
    <div id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="hero" width={170} onError={onImgError} />
        <img src={reactLogo} className="framework" alt="React logo" height={28} onError={onImgError} />
        <img src={viteLogo} className="vite" alt="Vite logo" height={26} onError={onImgError} />
      </div>

      <h1>Vite + React</h1>

      <div>
        <button className="counter" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p>Click the logos to learn more.</p>
    </div>
  )
}

export default App
