import { ReactNode, FC, useState } from 'react'

import { Settings } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon } from '@mui/material'
import { SettingsMenu } from '../Settings'
import moreOptionsMenu from './styles'

interface MoreOptionsMenuProps {
  children: ReactNode
  openMoreOptions: boolean
  anchorElMoreOptions: null | HTMLElement
  handleCloseMoreOptions: () => void
}

export const MoreOptionsMenu: FC<MoreOptionsMenuProps> = ({
  children,
  openMoreOptions,
  handleCloseMoreOptions,
  anchorElMoreOptions,
}) => {
  const [openSettingsOptions, setOpenSettingsOptions] = useState(false)

  const handleCloseSettingsOptions = () => {
    setOpenSettingsOptions(false)
  }

  const handleOpenSettingsOptions = () => {
    setOpenSettingsOptions(true)
  }

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation() // Detener la propagación del evento para evitar que se cierre el menú de opciones adicionales
    handleOpenSettingsOptions()
  }

  return (
    <>
      {children}

      <Menu
        anchorEl={anchorElMoreOptions}
        open={openMoreOptions}
        onClose={handleCloseMoreOptions}
        PaperProps={moreOptionsMenu.wrapper}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: -60 }}
      >
        <SettingsMenu
          openSettingsOptions={openSettingsOptions}
          handleCloseSettingsOptions={handleCloseSettingsOptions}
        >
          <MenuItem onClick={handleSettingsClick}>
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
