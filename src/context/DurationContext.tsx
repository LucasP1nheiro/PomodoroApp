import { createContext, useState } from 'react';

interface DurationContextProps {
    pomodoroDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
    setPomodoroDuration: (duration: number) => void;
    setShortBreakDuration: (duration: number) => void;
    setLongBreakDuration: (duration: number) => void;
}

interface DurationContextProviderProps{
    children: React.ReactNode
}

export const DurationContext = createContext<DurationContextProps>(
    {
        pomodoroDuration: 25 * 60,
        shortBreakDuration: 5 * 60,
        longBreakDuration: 15 * 60,
        setPomodoroDuration: () => { },
        setShortBreakDuration: () => { },
        setLongBreakDuration: () => { },
    }
);

export default function DurationContextProvider({ children }: DurationContextProviderProps){
    const [pomodoroDuration, setPomodoroDuration] = useState(25 * 60)
    const [shortBreakDuration, setShortBreakDuration] = useState(5 * 60)
    const [longBreakDuration, setLongBreakDuration] = useState(15 * 60)
    
    function handleSetPomodoro(duration: number) {
        setPomodoroDuration(duration)
    }

    function handleSetShort(duration: number) {
        setShortBreakDuration
    }

    function handleSetLong(duration: number) {
        setLongBreakDuration(duration)
    }

    return (
        <DurationContext.Provider
            value=
            {{
                pomodoroDuration,
                shortBreakDuration,
                longBreakDuration,
                setPomodoroDuration: handleSetPomodoro,
                setShortBreakDuration: handleSetShort,
                setLongBreakDuration: handleSetLong,
            }}
        >
            {children}
        </DurationContext.Provider>
    )
}