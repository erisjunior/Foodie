import React, { memo } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = {
  text: React.ReactNode;
  onClick: () => void;
};

function Button({ text, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {text}
    </ButtonContainer>
  );
}

export default memo(Button);
