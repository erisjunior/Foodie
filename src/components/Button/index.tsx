import React, { memo } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = {
  text: React.ReactNode;
  color: string;
  background: string;
  onClick: () => void;
};

function Button({ text, color, background, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      color={color}
      background={background}
      onClick={onClick}
      {...rest}
    >
      {text}
    </ButtonContainer>
  );
}

export default memo(Button);
