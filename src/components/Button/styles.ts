import styled from 'styled-components';

type ButtonProps = {
  color: string;
  background: string;
  theme: {
    colors: { [name: string]: string };
  };
};

export const ButtonContainer = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 30px;

  margin: 5px;
  padding: 20px 30px;

  color: ${({ theme, color }: ButtonProps) => theme.colors[color]};
  font-weight: bold;
  font-size: 20px;

  background: ${({ theme, background }: ButtonProps) =>
    theme.colors[background]};
`;
