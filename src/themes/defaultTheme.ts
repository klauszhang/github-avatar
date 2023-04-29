import { createTheme, Theme } from '@mui/material'

/**
 * - Create theme derived from default MuiTheme
 * - Set breakpoints
 * - Customize MUI components
 * - Could relocate each group of settings into there own file, breakpoints.ts, muiCard.ts etc..
 */
const theme: Theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: 16,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          height: 80,
          width: 80,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          padding: '10px 0',
        },
      },
    },
  },
})

export default theme
