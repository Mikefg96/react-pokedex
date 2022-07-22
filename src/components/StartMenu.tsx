import { IStartMenuProps } from "../types"

const StartMenu = ({ setIsMenuOpen, setIsPokedexOpen, actionAudio }: IStartMenuProps) => {

  const handlePokedexClick = () : void => {
    actionAudio.play()

    setIsMenuOpen(false)
    setIsPokedexOpen(true)
  }

  const handleExitClick = () : void => { setIsMenuOpen(false) }

  return (
    <div className='start-menu-wrapper'>
      <div className='nes-container is-rounded'>
        <p className='available-option' onClick={() => handlePokedexClick()}>POKéDEX</p>
        <p>POKéMON</p>
        <p>ITEM</p>
        <p>ASH</p>
        <p>SAVE</p>
        <p>OPTION</p>
        <p className='available-option' onClick={() => handleExitClick()}>EXIT</p>
      </div>
    </div>
  )
}

export default StartMenu