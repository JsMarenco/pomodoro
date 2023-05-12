import React, { FC, ChangeEvent, forwardRef, useState, useContext } from 'react'

import {
  Dialog,
  Stack,
  Slide,
  DialogContent,
  InputBase,
  Button,
  Box,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import menuStyles from '../styles'
import { MenuProps } from '@/ts/interfaces/menu'
import { copyToClipboard, generateRoomInvitationLink } from '@/utils/basic'
import { AppMessageContext } from '@/context/AppMessageContext'
import { useRouter } from 'next/router'
import DialogTitleMenu from '@/components/Custom/DialogTitleMenu'
import createRoomService from '@/services/createRoom'
import httpStatus from '@/constants/httpStatus'
import { useDispatch } from 'react-redux'
import { createRoom, updateRoomHost } from '@/app/slices/pomodoro/personal'
import { Room } from '@/ts/interfaces/states/pomodoro'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import LoginIcon from '@mui/icons-material/Login'
import { roomInitState } from '@/utils/states/pomo/room'
import roomInputs from './formInputs'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const btnStyles = {
  borderRadius: 2,
  borderColor: 'text.primary',
  color: 'text.primary',
  '&:hover': {
    borderColor: 'background.paper',
    boxShadow: 2,
  },
}

const inputStyles = {
  borderRadius: 2,
  py: 1,
  px: 2,
  bgcolor: 'background.default',
}

export const CreateRoomMenu: FC<MenuProps> = ({
  children,
  isOpen,
  handleClose,
}) => {
  const [newRoom, setNewRoom] = useState<Room>(roomInitState)
  const [loading, setLoading] = useState(false)
  const { handleMessage } = useContext(AppMessageContext)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setNewRoom((prevRoom: Room) => ({
      ...prevRoom,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    const { status, message, body } = await createRoomService(
      newRoom.name,
      newRoom.description || ''
    )

    if (status === httpStatus.created.code) {
      setNewRoom(body)
      setLoading(false)
    }

    handleMessage(message)
  }

  const handleCopyLink = () => {
    copyToClipboard(newRoom.link)
    handleMessage('Copied')
  }

  const handleJoin = () => {
    dispatch(createRoom(newRoom))
    dispatch(
      updateRoomHost({
        fullname: 'Angel Marenco',
      })
    )
    router.push(newRoom.link)
  }

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
        <DialogTitleMenu text="Create Room" handleClose={handleClose} />

        <DialogContent>
          <Stack spacing={1.5} component="form" onSubmit={handleSubmit}>
            {roomInputs.map((input, key) => (
              <InputBase
                key={key}
                placeholder={input.placeholder}
                sx={inputStyles}
                fullWidth={input.fullwidth}
                autoComplete={input.autocomplete}
                onChange={handleChange}
                value={
                  input.name === 'name' ? newRoom.name : newRoom.description
                }
                name={input.name}
                disabled={loading}
                role={input.role}
              />
            ))}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              {!newRoom.link && (
                <Box flexGrow={1} className="flex align-middle justify-center">
                  <Box
                    sx={{
                      bgcolor: 'secondary.main',
                      borderRadius: 3,
                      width: '150px',
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 3,
                        '&:hover': {
                          bgcolor: 'secondary.main',
                        },
                        mx: 'auto',
                      }}
                      disableElevation
                      disableFocusRipple
                      fullWidth
                      disableRipple
                      disableTouchRipple
                      disabled={!newRoom.name || loading}
                      type="submit"
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              )}

              {newRoom.link && (
                <>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={btnStyles}
                    onClick={handleCopyLink}
                    startIcon={<ContentCopyIcon />}
                  >
                    Copy link
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    sx={btnStyles}
                    onClick={handleJoin}
                    endIcon={<LoginIcon />}
                  >
                    join
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
