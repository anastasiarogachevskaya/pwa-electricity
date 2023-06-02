// components/SettingsButton.tsx
import { IoMdSettings } from 'react-icons/io';
import styled from 'styled-components';
import Link from 'next/link';

const SettingsIconButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000; // Set the color of the icon here
  font-size: 24px; // Set the size of the icon here
`;

const SettingsButton = () => {
  return (
    <Link href="/settings">
      <SettingsIconButton>
        <IoMdSettings />
      </SettingsIconButton>
    </Link>
  );
};

export default SettingsButton;
