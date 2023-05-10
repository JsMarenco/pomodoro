import { ReactNode, FC, useContext, forwardRef } from 'react'

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
import CloseIcon from '@mui/icons-material/Close'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateFocusTimeDuration,
  updateLongBreakDuration,
  updatePomodoroIntervals,
  updateShortBreakDuration,
} from '@/app/slices/pomodoro/personal'
import { RootState } from '@/app'
import settingsMenuStyles from './styles'
import { MenuProps } from '@/ts/interfaces/menu'

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
    userFocusTimeDuration,
    userPomodoroIntervals,
    userShortBreakDuration,
    userLongBreakDuration,
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
        sx={settingsMenuStyles.wrapper}
      >
        <DialogTitle>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={400}
            >
              Settings
            </Typography>

            <IconButton onClick={handleClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={1}>
            <SettingItem label="Dark Mode">
              <Switch
                defaultChecked={
                  currentThemeName === appThemes.dark ? true : false
                }
                onClick={handleChangeThemeApp}
              />
            </SettingItem>

            <SettingItem label="Focus length">
              <NumericInputSelect
                placeholder={String(userFocusTimeDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateFocusTimeDuration(newDuration))
                }
                minValue={pomodoroTimer.focusTimer.durationRange.min}
                maxValue={pomodoroTimer.focusTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Pomodoros until long break">
              <NumericInputSelect
                placeholder={String(userPomodoroIntervals)}
                handleOnChange={(newDuration) =>
                  dispatch(updatePomodoroIntervals(newDuration))
                }
                minValue={pomodoroTimer.intervalTimer.durationRange.min}
                maxValue={pomodoroTimer.intervalTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Short break length">
              <NumericInputSelect
                placeholder={String(userShortBreakDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateShortBreakDuration(newDuration))
                }
                minValue={pomodoroTimer.shortBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.shortBreakTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Long break length">
              <NumericInputSelect
                placeholder={String(userLongBreakDuration)}
                handleOnChange={(newDuration) =>
                  dispatch(updateLongBreakDuration(newDuration))
                }
                minValue={pomodoroTimer.longBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.longBreakTimer.durationRange.max}
              />
            </SettingItem>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
