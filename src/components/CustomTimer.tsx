import * as Slider from '@radix-ui/react-slider';
import { useEffect, useState, useContext, createContext } from 'react';
import { DurationContext } from '../context/DurationContext';
import TimesContextProvider from '../context/TimesContext';
import { TimesContext } from '../context/TimesContext';


interface CustomTimerProps {
  description: string;
  activateButton: boolean;
  unactivateButton: () => void;
}



const CustomTimer = ({ description, activateButton, unactivateButton}: CustomTimerProps) => {
  const [value, setValue] = useState<number[]>([30]);
  const [number, setNumber] = useState(30);

  const {setPomodoroContext, setShortBreakContext, setLongBreakContext } = useContext(TimesContext);
  const {setPomodoroDuration, setShortBreakDuration, setLongBreakDuration} = useContext(DurationContext);
  

  
  function changeCustomTimer(description: string, num: number) {
    
    if (description === 'Pomodoro') {
      setPomodoroContext(num * 60)
      setPomodoroDuration(num * 60)
    }

    if (description === 'Short Break') {
      setShortBreakContext(num * 60)
      setShortBreakDuration(num * 60)
    }

    if (description === 'Long Break') {
      setLongBreakContext(num * 60)
      setLongBreakDuration(num * 60)
    }
  }

 

  useEffect(() => {
    if (activateButton) {
      changeCustomTimer(description, value[0])
    }
    unactivateButton()
    
  }, [activateButton])

  return (
    
       <form>
    <Slider.Root
        onValueChange={number => setValue(number)}
        className="relative flex items-center w-3/4 h-1 hover:cursor-pointer"
        defaultValue={[25]}
        max={60} step={1}
    >
      <Slider.Track className="bg-black relative flex-1 rounded-full h-full">
        <Slider.Range className="absolute bg-white rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-4 h-4 bg-white shadow-zinc-900 rounded-full" />
          </Slider.Root>
          <p className="text-white">{`${value} min`}</p>
   </form>
  
    
  )
}

export default CustomTimer