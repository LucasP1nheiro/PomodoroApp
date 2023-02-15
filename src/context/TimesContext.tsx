import { createContext, useState } from "react";

interface TimeContextProps {
    PomodoroContext: number;
    ShortBreakContext: number;
    LongBreakContext: number;
    setPomodoroContext: (value: number) => void;
    setShortBreakContext: (value: number) => void;
    setLongBreakContext: (value: number) => void;
}

interface TimesContextProviderProps {
    children: React.ReactNode;
}

export const TimesContext = createContext<TimeContextProps>(
    {
        PomodoroContext: 25,
        ShortBreakContext: 5,
        LongBreakContext: 10,
        setPomodoroContext: () => {},
        setShortBreakContext: () => {},
        setLongBreakContext: () => {},
    }
);

export default function TimesContextProvider({ children }: TimesContextProviderProps) {
    const [Pomodoro, setPomodoro] = useState(25 * 60);
    const [ShortBreak, setShortBreak] = useState(5 * 60);
    const [LongBreak, setLongBreak] = useState(10 * 60);

    function handleSetPomodoro(value: number) {
        setPomodoro(value);
    }

    function handleSetShortBreak(value: number) {
        setShortBreak(value);
    }

    function handleSetLongBreak(value: number) {
        setLongBreak(value);
    }

    return (
        <TimesContext.Provider value={{
            PomodoroContext: Pomodoro,
            ShortBreakContext: ShortBreak,
            LongBreakContext: LongBreak,
            setPomodoroContext: setPomodoro,
            setShortBreakContext: handleSetShortBreak,
            setLongBreakContext: handleSetLongBreak,
            
        }}>{children}</TimesContext.Provider>
    )
    
};

