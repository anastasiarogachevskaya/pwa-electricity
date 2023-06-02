import { SpecialTextContainer, StyledInput, Heading1 } from '../elements/Typography';

const UserNameInput = ({ value, onChangeText }) => {
  return (
    <SpecialTextContainer>
      <Heading1>Hey, </Heading1>
      <StyledInput
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder="user"
        id="userName"
      />
    </SpecialTextContainer>
  );
};

export default UserNameInput;
