import React, { FC } from 'react'

import { Stack, Avatar, Typography, IconButton } from '@mui/material'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import Person4Icon from '@mui/icons-material/Person4'

interface ParticipantProps {
  fullname: string
  avatarUrl: string
  isHost: boolean
  isPartcipant: boolean
  onKickParticipant: () => void
}

const Participant: FC<ParticipantProps> = ({
  fullname,
  avatarUrl,
  isHost,
  onKickParticipant,
  isPartcipant,
}) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '100%' }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="left"
        sx={{
          maxWidth: '52%',
        }}
      >
        <Avatar src={avatarUrl} alt={`${fullname}'s avatar`}>
          {fullname.charAt(0).toLocaleUpperCase()}
        </Avatar>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {fullname}
        </Typography>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="rigth"
      >
        {isHost && <Person4Icon />}

        {isHost && !isPartcipant && (
          <IconButton onClick={onKickParticipant}>
            <PersonRemoveIcon />
          </IconButton>
        )}
      </Stack>
    </Stack>
  )
}

export default Participant
