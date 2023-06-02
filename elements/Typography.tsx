import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 24px;
  font-family: var(--font-nanum);
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: lowercase;
`;

export const Heading2 = styled.h2`
  font-size: 20px;
  font-family: var(--font-nanum);
  font-weight: 700;
  text-transform: lowercase;
`;

export const StyledInput = styled.input`
  font-size: 24px;
  font-family: var(--font-nanum);
  font-weight: 700;
  text-decoration-line: underline;
  margin-bottom: 16px;
  text-transform: lowercase;
  border: 0;

  &:focus {
    border-color: transparent;
  }
`;

export const StyledInputRange = styled(StyledInput)`
  width: 30px;
  font-size: 20px;
  margin-left: 10px;
  min-width: 50px; // Adjust this value according to your need
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const SpecialTextContainer = styled(TextContainer)`
  transform: translateX(100px);
  justify-content: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px
  margin-right: 20px
`;