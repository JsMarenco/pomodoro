import { FC, ReactNode } from 'react'

import { Stack, Typography, Box } from '@mui/material'

export const SettingItem: FC<{ children: ReactNode; label: string }> = ({
  children,
  label,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <Typography variant="body2" color="text.primary" fontWeight={300}>
        {label}
      </Typography>

      <Box>{children}</Box>
    </Stack>
  )
}
