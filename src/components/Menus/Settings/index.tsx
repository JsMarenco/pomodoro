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
import { updateFocusTimeDuration } from '@/app/slices/pomodoro/personal'
import { RootState } from '@/app'

interface SettingsMenuProps {
  children: ReactNode
  openSettingsOptions: boolean
  handleCloseSettingsOptions: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const SettingsMenu: FC<SettingsMenuProps> = ({
  children,
  openSettingsOptions,
  handleCloseSettingsOptions,
}) => {
  const { handleChangeThemeApp, currentThemeName } = useContext(AppThemeContext)
  const { userFocusTimeDuration } = useSelector(
    (state: RootState) => state.personalPomodoro
  )
  const dispatch = useDispatch()

  return (
    <>
      {children}

      <Dialog
        open={openSettingsOptions}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSettingsOptions}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        sx={{
          '.MuiDialog-paper': {
            borderRadius: 2,
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            width: '100%',
          },
        }}
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

            <IconButton onClick={handleCloseSettingsOptions} size="small">
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

            {/* <SettingItem label="Long break length">
              <NumericInputSelect
                placeholder={String(pomodoroTimer.longBreakTimer.defaultDuration)}
                handleOnChange={(value) => console.log(value)}
                minValue={pomodoroTimer.longBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.longBreakTimer.durationRange.max}
              />
            </SettingItem>

            <SettingItem label="Short break length">
              <NumericInputSelect
                placeholder={String(pomodoroTimer.shortBreakTimer.defaultDuration)}
                handleOnChange={(value) => console.log(value)}
                minValue={pomodoroTimer.shortBreakTimer.durationRange.min}
                maxValue={pomodoroTimer.shortBreakTimer.durationRange.max}
              />
            </SettingItem> */}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
