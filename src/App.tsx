import React, { useState } from 'react'

import StartMenu from './components/StartMenu'
import Pokedex from './components/Pokedex'

import './main.css'
import start from './assets/start.wav'
import action from './assets/action.wav'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [isPokedexOpen, setIsPokedexOpen] = useState<Boolean>(false)

  const StartMenuAudio = new Audio(start)
  const ActionAudio = new Audio(action)
  
  // Handles navigation flow between menu -> pokédex, and viceversa
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter' && !isPokedexOpen) {
      StartMenuAudio.play()
      setIsMenuOpen(prevState => !prevState)
    } else if(event.key === 'Escape') {
      setIsPokedexOpen(false)
      setIsMenuOpen(isPokedexOpen)
    }
  }

  return (
    <div className='main-wrapper' tabIndex={0} onKeyDown={e => handleKeyDown(e)}>
      { isMenuOpen && (<StartMenu setIsMenuOpen={setIsMenuOpen} setIsPokedexOpen={setIsPokedexOpen} actionAudio={ActionAudio}/>) }
      { isPokedexOpen && (<Pokedex />)}
    </div>
  )
}

export default App
