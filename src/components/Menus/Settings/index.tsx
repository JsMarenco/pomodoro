import { FC, useContext, forwardRef } from 'react'

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
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { SettingItem } from './SettingsItem'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
import { useDispatch, useSelector } from 'react-redux'
import {
  switchToSilenceMode,
  updateFocusTimeDuration,
  updateLongBreakDuration,
  updatePomodoroIntervals,
  updateShortBreakDuration,
} from '@/app/slices/pomodoro/personal'
import { RootState } from '@/app'
import menuStyles from '../styles'
import { MenuProps } from '@/ts/interfaces/menu'
import DialogTitleMenu from '@/components/Custom/DialogTitleMenu'

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
        <DialogTitleMenu
          text='Settings'
          handleClose={handleClose}
        />

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

            <SettingItem label="Sound">
              <Switch
                checked={soundsEnabled}
                onClick={() => dispatch(switchToSilenceMode())}
                color={
                  currentThemeName === appThemes.dark ? 'primary' : 'secondary'
                }
              />
            </SettingItem>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
