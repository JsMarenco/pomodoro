import { ReactNode, FC, useState } from 'react'

import appRoutes from '@/constants/routes/app'
import { Settings } from '@mui/icons-material'
import { Menu, MenuItem, ListItemIcon } from '@mui/material'
import { useRouter } from 'next/router'
import { SettingsMenu } from '../Settings'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

interface MoreOptionsMenuProps {
  children: ReactNode
  openMoreOptions: boolean
  anchorElMoreOptions: null | HTMLElement
  handleCloseMoreOptions: () => void
  updateMinutes: (minutes: number) => void
}

const paperOptions = {
  elevation: 0,
  sx: {
    width: 200,
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mb: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 18,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(50%) rotate(45deg)',
      zIndex: 0,
    },
    borderRadius: 2,
  },
}

export const MoreOptionsMenu: FC<MoreOptionsMenuProps> = ({
  children,
  openMoreOptions,
  handleCloseMoreOptions,
  anchorElMoreOptions,
  updateMinutes
}) => {
  const router = useRouter()

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
        id="account-menu"
        open={openMoreOptions}
        onClose={handleCloseMoreOptions}
        PaperProps={paperOptions}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: -100 }}
      >
        <SettingsMenu
          openSettingsOptions={openSettingsOptions}
          handleCloseSettingsOptions={handleCloseSettingsOptions}
          updateMinutes={updateMinutes}
        >
          <MenuItem onClick={handleSettingsClick}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </SettingsMenu>

        <MenuItem onClick={() => router.push(appRoutes.stats.index)}>
          <ListItemIcon>
            <BarChartOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Stats
        </MenuItem>
      </Menu>
    </>
  )
}
