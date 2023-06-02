import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import Link from 'next/link';

const CloseIconButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000; // Set the color of the icon here
  font-size: 24px; // Set the size of the icon here
`;

const CloseButton = () => {
  return (
    <Link href="/">
      <CloseIconButton>
        <IoMdClose />
      </CloseIconButton>
    </Link>
  );
};

export default CloseButton;
