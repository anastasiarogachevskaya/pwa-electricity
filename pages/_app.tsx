import type { AppProps } from 'next/app'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { lightTheme, darkTheme } from '../themes'
import useSunTimes from '../hooks/useSunTimes'

export default function App({ Component, pageProps }: AppProps) {
  const sunTimes = useSunTimes(36.7201600, -4.4203400);
  
  let theme: DefaultTheme = lightTheme;
  if (sunTimes) {
    const now = new Date();
    if (now > sunTimes.sunrise && now < sunTimes.sunset) {
      theme = lightTheme;
    } else {
      theme = darkTheme;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
