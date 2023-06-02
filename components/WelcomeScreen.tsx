import React, { useState } from 'react';
import { Container } from '../elements/Container';
import UserNameInput from './UserNameInput';
import { PriceContainer, Heading1 } from '../elements/Typography';
import PriceLimitsInputs from './PriceLimitsInputs';

interface WelcomeProps {
  onFinished: (name: string, cautionZone: string, dangerZone: string) => void;
}

const WelcomeScreen: React.FC<WelcomeProps> = ({ onFinished }) => {
  const [name, setName] = useState('');
  const [cautionZone, setCautionZone] = useState('');
  const [dangerZone, setDangerZone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinished(name, cautionZone, dangerZone);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <UserNameInput value={name} onChangeText={setName} />
      <PriceContainer>
      <Heading1>Pick your price sensitivity limits:</Heading1>
        <PriceLimitsInputs
          cautionLimit={cautionZone}
          dangerLimit={dangerZone}
          onLimitChange={(value, limitType) => {
            console.log(value, limitType);
            if (limitType === 'caution') {
              setCautionZone(value);
            } else if (limitType === 'danger') {
              setDangerZone(value);
            }
          }}
        />
      </PriceContainer>
      {/* <CustomButton title="Save" onPress={handleSave} /> */}
      </form>
    </Container>
  );
}

export default WelcomeScreen;
