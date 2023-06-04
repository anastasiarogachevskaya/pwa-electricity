import { useEffect, useState } from 'react';

import UserNameInput from './UserNameInput';
import PriceLimitsInputs from './PriceLimitsInputs';
import Form from '../elements/Form';
import { PriceContainer, Heading1 } from '../elements/Typography';
import StyledButton from '../elements/Button';

interface WelcomeProps {
  onFinished: (name: string, cautionZone: string, dangerZone: string) => void;
  userName?: string;
  userCautionZone?: string;
  userDangerZone?: string;
  firstVisit?: boolean;
}

const WelcomeScreen: React.FC<WelcomeProps> = ({
  onFinished, firstVisit, userCautionZone, userDangerZone, userName
}) => {
  const [name, setName] = useState('');
  const [cautionZone, setCautionZone] = useState('');
  const [dangerZone, setDangerZone] = useState('');
  
  useEffect(() => {
    if (firstVisit) return;
    setName(userName);
    setCautionZone(userCautionZone);
    setDangerZone(userDangerZone);
  }, [firstVisit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinished(name, cautionZone, dangerZone);
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <UserNameInput value={name} onChangeText={setName} />
      <PriceContainer>
        <Heading1>
          {firstVisit ? 'Pick your price sensitivity limits: ' : 'Your price sensitivity limits: '}
        </Heading1>
        <PriceLimitsInputs
          cautionLimit={cautionZone}
          dangerLimit={dangerZone}
          onLimitChange={(value, limitType) => {
            if (limitType === 'caution') {
              setCautionZone(value);
            } else if (limitType === 'danger') {
              setDangerZone(value);
            }
          }}
        />
      </PriceContainer>
      <StyledButton>Save</StyledButton>
    </Form>
  );
}

export default WelcomeScreen;
