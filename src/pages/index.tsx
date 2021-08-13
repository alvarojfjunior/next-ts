import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig'

import AppBar from '../components/AppBar'

export const Home = (): JSX.Element => {
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar />
      <h1> Olá Mundo </h1>
      <button onClick={darkmode.toggle}>Switch Mode</button>
      <button onClick={darkmode.enable}>Dark Mode</button>
      <button onClick={darkmode.disable}>Light Mode</button>
    </ThemeProvider>
  )
}

export default Home
