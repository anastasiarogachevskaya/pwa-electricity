import styled from 'styled-components';

const Spacing = styled.div`
  padding: ${(props: { padding: string}) => props?.padding || 0}px;
`;

export default Spacing;
