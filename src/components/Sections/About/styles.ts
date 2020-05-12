import { Play } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 200px 10px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-right: 150px;

  .more {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightgrey};
  }

  h6 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
  }

  h2 {
    width: 550px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 44px;
    font-weight: bold;
  }

  p {
    width: 450px;
    color: ${({ theme }) => theme.colors.lightgrey};
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    font-weight: bold;

    margin: 30px 0;
  }
`;

export const BigImage = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;

  left: 0;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.grey};

  -webkit-transform: translate(50px, -50px);
  -moz-transform: translate(50px, -50px);
  transform: translate(50px, -50px);

  box-shadow: 70px 50px 150px #aaaaaa;
`;

export const SmallImage = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;

  right: 0;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.grey};

  -webkit-transform: translate(100px, 500px);
  -moz-transform: translate(100px, 500px);
  transform: translate(100px, 500px);

  box-shadow: 30px 50px 150px #aaaaaa;
`;

export const PlayIcon = styled(Play).attrs(({ theme }) => ({
  size: 70,
  color: theme.colors.white,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px;
  border-radius: 100%;

  margin: 0 20px 0 40px;
`;
