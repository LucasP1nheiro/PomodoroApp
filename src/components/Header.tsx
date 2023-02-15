import React, { useState, useContext, useEffect } from 'react'
import TimesContextProvider, { TimesContext }  from '../context/TimesContext';

interface HeaderProps { 
  handleChange: (description: string) => void;
}

const Header = ({ handleChange }: HeaderProps) => {
  const { PomodoroContext, ShortBreakContext, LongBreakContext, setPomodoroContext, setShortBreakContext, setLongBreakContext } = useContext(TimesContext);
  
  return (
    
      <header className="w-1/3 sm:w-2/3 flex flex-col sm:flex-row items-center justify-center gap-8">
      <button 
        onClick={() => handleChange('Pomodoro')}
        
        className="w-full sm:w-auto md:w-1/4 xl:text-3xl text-white border-white border-2 font-bold bg-white/10 p-2 xl:py-4 rounded-lg hover:bg-white hover:text-zinc-600 transition-all duration-500 md:text-xl sm:text-lg"

      >
        Pomodoro
      </button>
      <button 
        onClick={() => handleChange('Short Break')}

        className="w-full sm:w-auto md:w-1/4 xl:text-3xl text-white border-white border-2 font-bold bg-white/10 p-2 xl:py-4 rounded-lg hover:bg-white hover:text-zinc-600 transition-all duration-500 md:text-xl sm:text-lg text-base whitespace-nowrap"
      >
        Short Break
      </button>

      <button 
        onClick={() => handleChange('Long Break')}

        className="w-full sm:w-auto md:w-1/4 xl:text-3xl text-white border-white border-2 font-bold bg-white/10 p-2 xl:py-4 rounded-lg hover:bg-white hover:text-zinc-600 transition-all duration-500 md:text-xl sm:text-lg text-base"
      >
        Long Break
      </button>
    </header>
  
    
  )
}

export default Header