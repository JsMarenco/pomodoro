import { useState, MouseEvent } from 'react'

export default function useMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleOpen()
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleClick,
  }
}
