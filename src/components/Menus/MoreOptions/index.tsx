import { FC } from 'react'

import { Settings } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon } from '@mui/material'
import { SettingsMenu } from '../Settings'
import moreOptionsMenu from './styles'
import useMenu from '@/hooks/general/useMenu'
import { MenuProps } from '@/ts/interfaces/menu'

interface MoreOptionsMenuProps extends MenuProps {
  anchorElMoreOptions: null | HTMLElement
}

export const MoreOptionsMenu: FC<MoreOptionsMenuProps> = ({
  children,
  isOpen,
  handleClose,
  anchorElMoreOptions,
}) => {
  const settingMenu = useMenu()
  const createRoomMenu = useMenu()

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
      </Menu>
    </>
  )
}
