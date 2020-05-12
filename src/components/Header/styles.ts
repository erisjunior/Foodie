import { ShoppingCart } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    font-size: 20px;

    li {
      margin: 0px 20px;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  width: 150px;
  height: 50px;

  border-radius: 10px;

  cursor: pointer;

  background: ${({ theme }) => theme.colors.primary};
`;

export const ShoppingIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.black,
}))``;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;

  -webkit-transform: translate(22px, 5px);
  -moz-transform: translate(22px, 5px);
  transform: translate(22px, 5px);
`;
