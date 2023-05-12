import React, { FC, forwardRef } from 'react'

import { MenuProps } from '@/ts/interfaces/menu'
import {
  Avatar,
  Dialog,
  DialogContent,
  Slide,
  Stack,
  Typography,
  IconButton,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import DialogTitleMenu from '@/components/Custom/DialogTitleMenu'
import menuStyles from '../styles'
import Participant from './Participant'
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const RoomParticipantsMenu: FC<MenuProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  return (
    <>
      {children}

      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        onClose={handleClose}
        maxWidth="sm"
        sx={menuStyles.wrapper}
      >
        <DialogTitleMenu text="Participants" handleClose={handleClose} />

        <DialogContent>
          <Stack spacing={2}>
            <Participant
              onKickParticipant={() => console.log('Kicked')}
              fullname={'Rollin Han ddddddddddddddde'}
              avatarUrl={''}
              isHost={true}
              isPartcipant={false}
            />

            <Participant
              onKickParticipant={() => console.log('Kicked')}
              fullname={'Chandler Aufderhar'}
              avatarUrl={''}
              isHost={false}
              isPartcipant={true}
            />

            <Participant
              onKickParticipant={() => console.log('Kicked')}
              fullname={'Edwina Mohr'}
              avatarUrl={''}
              isHost={false}
              isPartcipant={true}
            />

            <Participant
              onKickParticipant={() => console.log('Kicked')}
              fullname={'Jessie DAmore'}
              avatarUrl={''}
              isHost={false}
              isPartcipant={true}
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default RoomParticipantsMenu
