import { Pause, Play } from 'phosphor-react'
import React, { useEffect, useState, useContext } from 'react'
import { useInterval } from '../hooks/use-interval'
import { secondsToTime } from '../utils/seconds-to-time'
import  { TimesContext }  from '../context/TimesContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { DurationContext } from '../context/DurationContext';


interface TimerProps {
  description: string
}

const Timer = ({ description}: TimerProps) => {
  const [play, setPlay] = useState(false)
  const { PomodoroContext, ShortBreakContext, LongBreakContext, setPomodoroContext, setShortBreakContext, setLongBreakContext } = useContext(TimesContext);
  const {pomodoroDuration, shortBreakDuration, longBreakDuration} = useContext(DurationContext);


  const RemainingTime = () => {
    if (description === 'Pomodoro') {
      if (PomodoroContext < 1) {
        return (
          <div className="text-white rounded-xl p-4 text-2xl">Time to rest!</div>
        )
      }
      else {
        return (
          <div className="text-white rounded-xl p-4 text-5xl">
          {secondsToTime(PomodoroContext)}      
          </div>
        )
      }
    }

    if (description === 'Short Break') {
      if (ShortBreakContext < 1) {
        return (
          <div className="text-white rounded-xl p-4 text-2xl">Time to focus.</div>
        )
      } else {
        return (
          <div className="text-white rounded-xl p-4 text-5xl">
            {secondsToTime(ShortBreakContext)}            
          </div>
        )
      }
    }

    if (description === 'Long Break') {
      if (LongBreakContext < 1) {
        return (
          <div className="text-white rounded-xl p-4 text-2xl">Time to focus.</div>
        )
      } else {
        return (
          <div className="text-white rounded-xl p-4 text-5xl">
            {secondsToTime(LongBreakContext)}      
          </div>
        )
      }
    }
  }  
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

  useEffect(() => {
    if (description === 'Pomodoro') {
      setPomodoroContext(pomodoroDuration)
    }

    if (description === 'Short Break') {
      setShortBreakContext(shortBreakDuration)
    }

    if (description === 'Long Break') {
      setLongBreakContext(longBreakDuration)
    }

    setPlay(false)
  }, [description])
  

  return (
    <div className="flex flex-col justify-center items-center lg:gap-20 md:gap-12 gap-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 2xl:p-40 w-1/3">
      {description === 'Pomodoro' && (
        <CountdownCircleTimer
        isPlaying={play}
        duration={pomodoroDuration}
        colors={'#fff'}
        size={250}
        trailColor="#27272a"
      >
        {RemainingTime}
      </CountdownCircleTimer>
      )}
      {description === 'Short Break' && (
        <CountdownCircleTimer
        isPlaying={play}
        duration={shortBreakDuration}
        colors={'#fff'}
        size={250}
        trailColor="#27272a"
      >
        {RemainingTime}
      </CountdownCircleTimer>
      )}
      {description === 'Long Break' && (
        <CountdownCircleTimer
        isPlaying={play}
        duration={longBreakDuration}
        colors={'#fff'}
        size={250}
        trailColor="#27272a"
      >
        {RemainingTime}
      </CountdownCircleTimer>
      )}
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