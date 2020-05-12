import { Coffee, MousePointer, FastForward } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin: 250px 10px;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;

  h6 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 44px;
    font-weight: bold;
    margin: 30px 0;
  }

  p {
    width: 500px;
    color: ${({ theme }) => theme.colors.lightgrey};
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;

  margin-top: 100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 35vh;

    margin: 0 50px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 50px;

    text-align: center;

    p {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 24px;
      font-weight: bold;
      margin: 30px 0;
    }

    span {
      width: 230px;
      color: ${({ theme }) => theme.colors.lightgrey};
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const CoffeeIcon = styled(Coffee).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;

export const MouseIcon = styled(MousePointer).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;

export const FastIcon = styled(FastForward).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;
