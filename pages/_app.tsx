import type { AppProps } from 'next/app'
import { Nanum_Gothic } from 'next/font/google';

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import { lightTheme, darkTheme } from '../themes'
import useSunTimes from '../hooks/useSunTimes'
import WelcomeScreen from '../components/WelcomeScreen'
import { useEffect, useState } from 'react'

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-nanum',
})

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
  
  const [firstVisit, setFirstVisit] = useState(false);
  const [name, setName] = useState('');
  const [cautionZone, setCautionZone] = useState('');
  const [dangerZone, setDangerZone] = useState('');

  useEffect(() => {
    const firstVisit = localStorage.getItem('firstVisit');
    const name = localStorage.getItem('name');
    const cautionZone = localStorage.getItem('cautionZone');
    const dangerZone = localStorage.getItem('dangerZone');

    if (!firstVisit) {
      setFirstVisit(true);
    } else {
      setName(name || '');
      setCautionZone(cautionZone || '');
      setDangerZone(dangerZone || '');
    }
  }, []);

  const handleWelcomeFinished = (name: string, cautionZone: string, dangerZone: string) => {
    localStorage.setItem('firstVisit', 'false');
    localStorage.setItem('name', name);
    localStorage.setItem('cautionZone', cautionZone);
    localStorage.setItem('dangerZone', dangerZone);
    setFirstVisit(false);
    setName(name);
    setCautionZone(cautionZone);
    setDangerZone(dangerZone);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {firstVisit ? (
          <WelcomeScreen onFinished={handleWelcomeFinished} />
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  );
}
