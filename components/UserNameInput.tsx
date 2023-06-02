import Spacing from '../elements/Spacing';
import { SpecialTextContainer, StyledInput, Heading1 } from '../elements/Typography';

const UserNameInput = ({ value, onChangeText }) => {
  return (
    <SpecialTextContainer>
      <Heading1>Hey, </Heading1>
      <Spacing padding="5"/>
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
