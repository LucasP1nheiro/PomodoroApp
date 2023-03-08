
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState, useContext, useEffect} from 'react'
import { PicturesContext } from '../context/PicturesContext'


//pictures

import blue from '../assets/blue.jpg'
import forest from '../assets/forest.jpg'
import sunset from '../assets/sunset.jpg'
import trees from '../assets/trees.jpg'
import bloodymoon from '../assets/bloodymoon.jpg'
import bridge from '../assets/bridge.jpg'
import lake from '../assets/lake.jpg'
import landscape from '../assets/landscape.jpg'
import sky from '../assets/sky.jpg'






const PossiblePictures = () => {
  const pictureArray = [ forest, sunset, trees, bloodymoon, bridge, lake, landscape, sky, blue]
  const { setPicture, picture } = useContext(PicturesContext)
  const [reRender, setReRender] = useState(0)

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? pictureArray.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === pictureArray.length - 1 ? 0 : currentImage + 1);
  };
  

  function handleChange(image: string) {
    setPicture(image)
  }

  console.log(pictureArray)
  return (
    <div className="h-full w-full flex justify-center gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center md:py-0 sm:py-1">
      <button onClick={handlePrevClick}>
        <div className='bg-white z-50 opacity-100  rounded-full '><CaretLeft size={24} weight='regular' color='#27272a' /></div>
      </button>
      
      <img
        onClick={() => handleChange(pictureArray[currentImage])}
        src={pictureArray[currentImage]} alt="Carousel Image" className="rounded-xl w-2/3 h-full md:w-4/5  lg:w-2/3 xl:w-3/4 xl:h-5/6  hover:cursor-pointer hover:brightness-125 transition-all duration-500"
        /> 
      
      <button onClick={handleNextClick}>
      <div className='bg-white z-50 opacity-100 rounded-full'><CaretRight size={24} weight='regular' color='#27272a'/></div>
      </button>
    </div>
  )
}

export default PossiblePictures