/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, Theme } from '@mui/material'

/**
 * - Create theme derived from default MuiTheme
 * - Set breakpoints
 * - Customize MUI components
 * - Could relocate each group of settings into there own file, breakpoints.ts, muiCard.ts etc..
 */
const theme: Theme = createTheme({
  components: {
    MuiCardHeader: {},
    MuiCardMedia: {},
    MuiCard: {
      styleOverrides: {
        root: {
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          padding: '10px 0'
        },
      },
    },
  },
})

export default theme
