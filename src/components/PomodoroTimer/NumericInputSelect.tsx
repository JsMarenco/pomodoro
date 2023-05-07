import React, { FC, useState } from 'react'

import { InputBase, Stack, IconButton, Divider } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface NumericInputSelectProps {
  placeholder: string
  handleOnChange: (value: number) => void
  minValue: number
  maxValue: number
}

export const NumericInputSelect: FC<NumericInputSelectProps> = ({
  placeholder,
  handleOnChange,
  minValue,
  maxValue,
}) => {
  const [inputValue, setInputValue] = useState(placeholder)

  const incrementValue = () => {
    // Convert the current value to a number and increment it
    const newValue = Number(inputValue) + 1
    const newValueString = String(newValue)
    if (newValue <= maxValue) {
      setInputValue(newValueString)
      handleOnChange(Number(newValueString))
    }
  }

  const decrementValue = () => {
    // Convert the current value to a number and decrement it
    const newValue = Number(inputValue) - 1
    const newValueString = String(newValue >= minValue ? newValue : minValue)
    if (newValue >= minValue) {
      setInputValue(newValueString)
      handleOnChange(Number(newValueString))
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const newValueString = newValue.replace(/[^0-9]/g, '') // Remove non-numeric characters
    if (
      newValueString !== '' &&
      Number(newValueString) >= minValue &&
      Number(newValueString) <= maxValue
    ) {
      setInputValue(newValueString)
      handleOnChange(Number(newValueString))
    }
  }

  return (
    <InputBase
      size="small"
      placeholder={String(placeholder)}
      endAdornment={
        <Stack
          sx={{
            ml: 1,
            borderLeft: '1px solid',
            borderLeftColor: 'text.primary',
          }}
        >
          <IconButton
            disableFocusRipple
            disableRipple
            size="small"
            sx={{ p: 0 }}
            onClick={incrementValue}
            disabled={inputValue === String(maxValue)}
          >
            <ArrowDropUpIcon fontSize="small" />
          </IconButton>

          <Divider />

          <IconButton
            disableFocusRipple
            disableRipple
            size="small"
            sx={{ p: 0 }}
            onClick={decrementValue}
            disabled={inputValue === String(minValue)}
          >
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
        </Stack>
      }
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'text.primary',
        pl: 1,
        maxWidth: '70px',
        '.MuiInputBase-input': {
          textAlign: 'center',
          p: 0,
        },
      }}
      onChange={handleChange}
      value={inputValue}
    />
  )
}
