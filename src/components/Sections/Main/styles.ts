import { ArrowRight, Clock, MapPin, Phone } from 'react-feather';
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

  h2 {
    width: 650px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 64px;
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

  span {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;

export const BigImage = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;

  right: 0;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.grey};

  -webkit-transform: translate(-220px, 70px);
  -moz-transform: translate(-220px, 70px);
  transform: translate(-220px, 70px);

  box-shadow: -70px 50px 150px #aaaaaa;
`;

export const SmallImage = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;

  left: 0;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.grey};

  -webkit-transform: translate(-100px, 200px);
  -moz-transform: translate(-100px, 200px);
  transform: translate(-100px, 200px);

  box-shadow: 30px 50px 150px #aaaaaa;
`;

export const ArrowIcon = styled(ArrowRight).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.white,
}))`
  margin-left: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;

  margin-top: 500px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 15vh;

    margin: 0 50px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0 50px;

    p {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
    }

    span {
      color: ${({ theme }) => theme.colors.lightgrey};
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const ClockIcon = styled(Clock).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;

export const PinIcon = styled(MapPin).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;

export const PhoneIcon = styled(Phone).attrs(({ theme }) => ({
  size: 50,
  color: theme.colors.primary,
}))``;
