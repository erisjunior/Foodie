import { Star } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin: 30px 10px;
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

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-self: center;
  margin-top: 100px;

  width: 40vw;
  height: 32vh;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 50px;

  text-align: center;

  .image {
    min-width: 100px;
    min-height: 100px;

    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
  }

  p {
    width: 70%;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 18px;
    margin: 13px 0;

    &.bold {
      font-weight: bold;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.lightgrey};
    font-size: 12px;
    font-weight: normal;
  }
`;

export const StarIcon = styled(Star).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.primary,
}))`
  margin: 0 3px;
`;
