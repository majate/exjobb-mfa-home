import { createTheme, ThemeProvider } from '@mui/material'
import { AppProps } from 'single-spa'
import Home from './Home'

const theme = createTheme()

export default function Root(props: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
