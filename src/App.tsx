import { useContext, useState } from 'react'
import Header from './components/Header'
import Popover from './components/Popover'
import Settings from './components/Settings'
import Timer from './components/Timer'
import { PicturesContext } from './context/PicturesContext'

//pictures
import aurora from 'src/assets/aurora.jpg'
import blue from 'src/assets/blue.jpg'
import forest from 'src/assets/forest.jpg'
import sunset from 'src/assets/sunset.jpg'
import trees from 'src/assets/trees.jpg'
import bloodymoon from 'src/assets/bloodymoon.jpg'
import bridge from '../assets/bridge.jpg'
import lake from '../assets/lake.jpg'
import landscape from '../assets/landscape.jpg'
import sky from '../assets/sky.jpg'



function App() {
  const [description, setDescription] = useState("Pomodoro")
  const [popoverDisplay, setPopoverDisplay] = useState("none")
  const { picture } = useContext(PicturesContext)
  

  function handleChange (description: string) {
    setDescription(description)
  }

  function changeDisplay() {
    setPopoverDisplay(popoverDisplay === "none"? "block" : "none")
  }

  return (
    <div
      style={{backgroundImage: `url(${picture})`}}
      className="w-screen h-screen flex flex-col justify-between lg:py-0 py-10 lg:justify-around items-center bg-no-repeat bg-cover bg-center bg-fixed gap-8">
      <Header handleChange={handleChange} />
      <div className="flex justify-center md:gap-60 xl:px-20 w-full">
        <Timer description={description} />
        <Popover popoverDisplay={popoverDisplay}  />
      </div>
      <div className="flex justify-end w-full sm:px-10 px-2">
        <Settings changeDisplay={changeDisplay} />
      </div>
    </div>
  )
}

export default App
