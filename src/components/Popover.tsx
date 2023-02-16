import React, { useContext, useState } from 'react'
import CustomTimer from './CustomTimer'
import PossiblePictures from './PossiblePictures'
import TimesContextProvider, { TimesContext } from '../context/TimesContext'
import { Check, Repeat } from 'phosphor-react'
import { PicturesContext } from '../context/PicturesContext'
import {DurationContext} from '../context/DurationContext'

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


interface PopoverProps {
  popoverDisplay: string
}

const Popover = ({ popoverDisplay }: PopoverProps) => {
  const [activateButton, setActivateButton] = useState(false)
  const { setPomodoroContext, setShortBreakContext, setLongBreakContext } = useContext(TimesContext)
  const {setPomodoroDuration, setShortBreakDuration, setLongBreakDuration} = useContext(DurationContext);
  const { picture } = useContext(PicturesContext)

  
  
  function unactivateButton() {
    setActivateButton(false)
  }

  function handleReset() {
    setShortBreakContext(5 * 60)
    setLongBreakContext(10 * 60)
    setPomodoroContext(25 * 60)
    setShortBreakDuration(5 * 60)
    setLongBreakDuration(10 * 60)
    setPomodoroDuration(25 * 60)
  }

  return (
    
    <div

      style={{ display: popoverDisplay }}
      className="bg-[url('src/assets/sky.jpg')] md:bg-[url('')] h-screen w-screen sm:z-50 bg-zinc-700 md:bg-white/20 md:h-2/3  md:w-1/3 xl:w-1/4 rounded-lg absolute right-0 bottom-0 md:right-10  md:bottom-44"
    >
      <div className="h-full w-full flex flex-col justify-start sm:justify-around lg:py-5 items-center py-10">
        <div className="flex flex-col gap-4 pl-12 pt-10 h-1/3 w-5/6">
          <h2 className="text-white">Pomodoro</h2>
          <CustomTimer description='Pomodoro' activateButton={activateButton} unactivateButton={unactivateButton}/>
          <h2 className="text-white">Short Break</h2>
          <CustomTimer description='Short Break'activateButton={activateButton} unactivateButton={unactivateButton}/>
          <h2 className="text-white">Long Break</h2>
          <CustomTimer description='Long Break' activateButton={activateButton} unactivateButton={unactivateButton}/>
        </div>
        <div className="flex w-4/5 gap-5 lg:gap-10 justify-center h-1/2 items-end pb-16 md:pb-5">
          <button
            className="p-3 h-14  bg-zinc-700 border-2 rounded-xl hover:bg-zinc-800 transition-all duration-500 "
            onClick={() => setActivateButton(true)}
          >
            <Check size={24} weight="fill" color="white"/>
          </button>

          <button
            className="p-3 h-14 bg-zinc-700 border-2 rounded-xl hover:bg-zinc-800 transition-all duration-500 "
            onClick={() => handleReset()}
          >
              <Repeat size={24} weight="fill" color="white"/>
          </button>
        </div>
        

        <div className="sm:mb-0 mb-20 flex left-1/6">
          <PossiblePictures/>
        </div>
        
      </div>
    </div>
   
  )
}

export default Popover