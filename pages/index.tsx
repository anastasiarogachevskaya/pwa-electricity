import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { useEffect, useState } from 'react';

import { getElectricityPrice } from '../utils/getElectricityPrice';

import { Wrapper, ColWrapper, HeightWrapper } from '../elements/Wrapper'
import { PriceText, DateText } from '../elements/Typography';
import formatDate from '../utils/formatDate';
import StyledImage from '../elements/Image';
import SettingsButton from '../elements/SettingsButton';
import WelcomeScreen from '../components/WelcomeScreen';

type HomeProps = {
  price: number;
};

export default function Home({ price }: HomeProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [cautionZone, setCautionZone] = useState(0);
  const [dangerZone, setDangerZone] = useState(0);
  
  useEffect(() => {
    const storedCautionZone = localStorage.getItem('cautionZone');
    const storedDangerZone = localStorage.getItem('dangerZone');

    if (storedCautionZone) {
      setCautionZone(parseInt(storedCautionZone));
    } else {
      setCautionZone(5);
    }
    if (storedDangerZone) {
      setDangerZone(parseInt(storedDangerZone));
    } else {
      setDangerZone(10);
    }
  }, []);

  return (
    <Wrapper cautionZone={cautionZone} dangerZone={dangerZone} price={price}>
      <SettingsButton />
      <HeightWrapper>
        {price <= 0 && <StyledImage src='../assets/rainbow-battery.png' />}
        {price > 0 && price < cautionZone && <StyledImage src='../assets/green-battery.png' />}
        {price >= cautionZone && price < dangerZone && <StyledImage src='../assets/orange-battery.png' />}
        {price >= dangerZone && <StyledImage src='../assets/red-battery.png' />}
        <ColWrapper>
          <DateText>{formatDate(currentDate)}</DateText>
          <PriceText>{price} ¢</PriceText>
        </ColWrapper>
      </HeightWrapper>
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];
  const hour = currentDate.getHours();

  const data = await getElectricityPrice(date, hour);

  return {
    props: {
      price: data?.price,
    }
  }
}
