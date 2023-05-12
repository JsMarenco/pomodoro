import { FC } from 'react'

import { Settings } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon } from '@mui/material'
import { SettingsMenu } from '../Settings'
import moreOptionsMenu from './styles'
import useMenu from '@/hooks/general/useMenu'
import { MenuProps } from '@/ts/interfaces/menu'
import PersonIcon from '@mui/icons-material/Person'

interface MoreOptionsMenuProps extends MenuProps {
  anchorElMoreOptions: null | HTMLElement
  isRoom: boolean
}

const devGitHubUrl = 'https://github.com/JsMarenco'

export const MoreOptionsMenu: FC<MoreOptionsMenuProps> = ({
  children,
  isOpen,
  handleClose,
  anchorElMoreOptions,
}) => {
  const settingMenu = useMenu()

  const {
    isOpen: isSettingsOptionsOpen,
    handleClose: closeSettingsOptions,
    handleClick: handleSettingsOptionsClick,
  } = settingMenu

  return (
    <>
      {children}

      <Menu
        anchorEl={anchorElMoreOptions}
        open={isOpen}
        onClose={handleClose}
        PaperProps={moreOptionsMenu.wrapper}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: -100 }}
      >
        <SettingsMenu
          isOpen={isSettingsOptionsOpen}
          handleClose={closeSettingsOptions}
        >
          <MenuItem onClick={handleSettingsOptionsClick}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </SettingsMenu>

        <MenuItem onClick={() => window.open(devGitHubUrl, '_blank')}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Developer
        </MenuItem>
      </Menu>
    </>
  )
}
