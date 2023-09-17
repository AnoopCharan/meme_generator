import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Meme from './components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App
