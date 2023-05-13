import { FC, useContext, forwardRef, useState } from 'react'

import { NumericInputSelect } from '@/components/PomodoroTimer/NumericInputSelect'
import { AppThemeContext } from '@/context/AppThemeContext'
import { appThemes } from '@/themes'
import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  IconButton,
  DialogContent,
  Switch,
  Slide,
  Box,
  TextField,
  InputBase,
  Divider,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { SettingItem } from './SettingsItem'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
import { useDispatch, useSelector } from 'react-redux'
import {
  switchToSilenceMode,
  updateBackgroundPhoto,
  updateFocusTimeDuration,
  updateLongBreakDuration,
  updatePomodoroIntervals,
  updateShortBreakDuration,
} from '@/app/slices/pomodoro/personal'
import { RootState } from '@/app'
import menuStyles from '../styles'
import { MenuProps } from '@/ts/interfaces/menu'
import DialogTitleMenu from '@/components/Custom/DialogTitleMenu'
import SaveIcon from '@mui/icons-material/Save'
import { validateUrl } from '@/utils/basic'
import { AppMessageContext } from '@/context/AppMessageContext'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const SettingsMenu: FC<MenuProps> = ({
  children,
  isOpen,
  handleClose,
}) => {
  const { handleChangeThemeApp, currentThemeName } = useContext(AppThemeContext)
  const {
    focusTimeDuration,
    pomodoroIntervals,
    shortBreakDuration,
    longBreakDuration,
    soundsEnabled,
  } = useSelector((state: RootState) => state.personalPomodoro)
  const dispatch = useDispatch()
  const [bgUrl, setBgurl] = useState('')
  const { handleMessage } = useContext(AppMessageContext)
  const { handleChangeBgImage } = useContext(AppThemeContext)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value

    setBgurl(url)
  }

  const handleSaveBgPhoto = () => {
    const isUrl = validateUrl(bgUrl)

    !isUrl && handleMessage('Invalid Url')

    if (isUrl) {
      handleMessage('Saved')
      handleChangeBgImage(bgUrl)
      dispatch(updateBackgroundPhoto(bgUrl))
    }
  }

  return (
    <>
      {children}

      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="sm"
        sx={menuStyles.wrapper}
      >
        <DialogTitleMenu text="Settings" handleClose={handleClose} />

        <DialogContent>
          <Stack spacing={1}>
            <SettingItem label="Dark Mode">
              <Switch
                checked={currentThemeName === appThemes.dark ? true : false}
                onClick={handleChangeThemeApp}
                color={
                  currentThemeName === appThemes.dark ? 'primary' : 'secondary'
                }
              />
            </SettingItem>

            <SettingItem label="Focus length">
              <NumericInputSelect
                placeholder={String(focusTimeDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateFocusTimeDuration(newDuration))
                }
                minValue={pomodoroTimer.focusTimer.durationRange.min}
                maxValue={pomodoroTimer.focusTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Pomodoros until long break">
              <NumericInputSelect
                placeholder={String(pomodoroIntervals)}
                handleOnChange={(newDuration) =>
                  dispatch(updatePomodoroIntervals(newDuration))
                }
                minValue={pomodoroTimer.intervalTimer.durationRange.min}
                maxValue={pomodoroTimer.intervalTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Short break length">
              <NumericInputSelect
                placeholder={String(shortBreakDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateShortBreakDuration(newDuration))
                }
                minValue={pomodoroTimer.shortBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.shortBreakTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Long break length">
              <NumericInputSelect
                placeholder={String(longBreakDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateLongBreakDuration(newDuration))
                }
                minValue={pomodoroTimer.longBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.longBreakTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Sounds">
              <Switch
                checked={soundsEnabled}
                onClick={() => dispatch(switchToSilenceMode())}
                color={
                  currentThemeName === appThemes.dark ? 'primary' : 'secondary'
                }
              />
            </SettingItem>

            <SettingItem label="Change background">
              <Box className="flex align-middle justify-center">
                <InputBase
                  id=""
                  color="primary"
                  margin="none"
                  size="small"
                  placeholder="Url"
                  sx={{
                    maxWidth: '100px',
                    mr: 1,
                    borderRadius: 2.5,
                    py: 1,
                    px: 1.5,
                    bgcolor: 'background.default',
                  }}
                  onChange={handleChange}
                />

                <IconButton
                  size="small"
                  disabled={!bgUrl}
                  onClick={handleSaveBgPhoto}
                >
                  <SaveIcon
                    color={
                      currentThemeName === appThemes.dark
                        ? 'primary'
                        : 'secondary'
                    }
                  />
                </IconButton>
              </Box>
            </SettingItem>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
