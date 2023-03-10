import React from 'react'
import { Gear, X } from 'phosphor-react'

interface SettingsProps {
  changeDisplay: () => void
}

const Settings = ({ changeDisplay }: SettingsProps) => {
  const [isOpen, setIsOpen] = React.useState(false)


  function handleClick() {
    changeDisplay()

    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="flex gap-4 bg-white/10 border-white border-2 z-50 hover:cursor-pointer hover:bg-white/20 p-4 rounded-xl transition-all duration-500 hover:scale-105 fixed bottom-2 right-2"
    >
      {isOpen ? (
        <X size={32} weight="fill" color="white"/>
      ): (
        <Gear size={32} weight="fill" color='white' />
      )}
    </div>
  )
}

export default Settings