import { createContext, useState } from 'react';
import blue from '../assets/blue.jpg'

interface PicturesContextProps {
    picture: string;
    setPicture: (picture: string) => void;
}

interface PicturesContextProviderProps {
    children: React.ReactNode
}

export const PicturesContext = createContext<PicturesContextProps>(
    {
        picture: 'blue',
        setPicture: () => {}
    }
);

export default function PicturesContextProvider({ children }: PicturesContextProviderProps) { 
    const [picture, setPicture] = useState(blue);

    function handleChangePicture(newPicture: string) {
        setPicture(newPicture);
    }

    return (
        <PicturesContext.Provider value={{ picture, setPicture: handleChangePicture }}>
            {children}
        </PicturesContext.Provider>
    );
}
