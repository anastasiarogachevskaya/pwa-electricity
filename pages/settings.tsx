import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import WelcomeScreen from '../components/WelcomeScreen';
import CloseButton from '../elements/CloseButton';

const SettingsPage = () => {
  const router = useRouter();  // Create an instance of useRouter
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
    setName(name);
    setCautionZone(cautionZone);
    setDangerZone(dangerZone);
    router.push('/');
  };

  return (
    <>
      <CloseButton />
      <WelcomeScreen
        onFinished={handleWelcomeFinished}
        userCautionZone={cautionZone}
        userDangerZone={dangerZone}
        userName={name}
        firstVisit={firstVisit}
      />
    </>
  );
};

export default SettingsPage;
