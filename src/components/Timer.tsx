import { Pause, Play } from 'phosphor-react'
import React, { useEffect, useState, useContext } from 'react'
import { useInterval } from '../hooks/use-interval'
import { secondsToTime } from '../utils/seconds-to-time'
import  { TimesContext }  from '../context/TimesContext';


interface TimerProps {
  description: string
}

interface CountdownCircleTimerProps {
  PomodoroContext: number
}
const Timer = ({ description}: TimerProps) => {
  const [play, setPlay] = useState(false)
  const { PomodoroContext, ShortBreakContext, LongBreakContext, setPomodoroContext, setShortBreakContext, setLongBreakContext } = useContext(TimesContext);
  
  const handleClick = () => {
    if (play === true) { 
        setPlay(false) 
      } 
    else {
      setPlay(true)
    }
  }

  if (description === 'Pomodoro') {
    useInterval(() => {
      setPomodoroContext(PomodoroContext - 1)
    }, play ? 1000 : null)
  }
  if (description === 'Short Break') {
    useInterval(() => {
      setShortBreakContext(ShortBreakContext - 1)
    }, play ? 1000 : null)
  }
  if (description === 'Long Break') {
    useInterval(() => {
      setLongBreakContext(LongBreakContext - 1)
    }, play ? 1000 : null)
  }
  

  return (
    <div className="flex flex-col justify-center items-center lg:gap-20 md:gap-12 gap-5 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-40 w-1/3 rounded-full">
      <h1 className="text-white rounded-xl p-4  2xl:text-9xl font-sans  xl:text-8xl text-7xl">
        { description === 'Pomodoro'? secondsToTime(PomodoroContext) : description === 'Short Break'? secondsToTime(ShortBreakContext) : secondsToTime(LongBreakContext)}
      </h1>
      <button
        className="text-white text-5xl border-white border-2 font-extrabold bg-white/10 hover:cursor-pointer hover:bg-white/20  p-4  hover:scale-110 rounded-xl transition-all duration-500"
        onClick={handleClick}
      >
        {play ? (
          <Pause size = { 32 } weight = "fill" color = "white" className="md:bg-[length:16px_16px]"/>
        ) : (
            <Play size={32} weight="fill" color="white"/>
        )}
      </button>
    </div>
  )
}

export default Timer