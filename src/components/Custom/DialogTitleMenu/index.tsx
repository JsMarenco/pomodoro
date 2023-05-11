import React, { FC } from 'react'

import { DialogTitle, Stack, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface DialogTitleMenuProps {
  text: string
  handleClose: () => void
}

const DialogTitleMenu: FC<DialogTitleMenuProps> = ({ text, handleClose }) => {
  return (
    <DialogTitle>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <Typography variant="subtitle1" color="text.primary" fontWeight={400}>
          {text}
        </Typography>

        <IconButton onClick={handleClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
    </DialogTitle>
  )
}

export default DialogTitleMenu
