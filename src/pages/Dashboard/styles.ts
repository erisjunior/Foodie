import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;

  padding: 20px 10%;

  background: linear-gradient(to bottom, white, #f8f8f8);
`;

export const Background = styled.div`
  width: 65%;
  height: 50vw;

  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;

  -webkit-transform: translate(350px, -400px);
  -moz-transform: translate(350px, -400px);
  transform: translate(350px, -400px);
`;
