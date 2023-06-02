// PriceLimitsInputs.js

import React from 'react';
import { Heading2, TextContainer, StyledInputRange } from '../elements/Typography';

const PriceLimitsInputs = ({ cautionLimit, dangerLimit, onLimitChange }) => {
  return (
    <>
      <TextContainer>
        <Heading2>Caution Zone</Heading2>
        <StyledInputRange
          value={cautionLimit}
          type="number"
          min={0}
          max={50}
          onChange={(e) => onLimitChange(e.target.value, 'caution')}
          id="cautionLimit"
          placeholder="10"
        />
        <Heading2>¢</Heading2>
      </TextContainer>
      <TextContainer>
        <Heading2>Danger Zone </Heading2>
        <StyledInputRange
          value={dangerLimit}
          type="number"
          min={(parseInt(cautionLimit) + 1).toString()}
          max={50}
          onChange={(e) => onLimitChange(e.target.value, 'danger')}
          id="dangerLimit"
          placeholder="20"
        />
        <Heading2>¢</Heading2>
      </TextContainer>
    </>
  );
};

export default PriceLimitsInputs;
