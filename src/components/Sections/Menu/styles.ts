import { Plus, Star } from 'react-feather';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin: 20px 10px;

  button {
    margin: 100px 0;
  }
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

export const Menu = styled.div`
  align-self: center;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 60px;
  padding: 10px;

  margin-top: 50px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 22vw;
  height: 60vh;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 50px;

  color: ${({ theme }) => theme.colors.grey};

  .image {
    width: 100%;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 0 50px;
  }

  .content {
    padding: 30px;
    position: relative;
    flex: 1;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 26px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  p {
    font-size: 16px;
    margin: 30px 0;
  }

  span {
    font-size: 14px;
  }
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 100,
  color: theme.colors.white,
}))`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 5px 20px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 50px 0 0 0;
`;

export const StarIcon = styled(Star).attrs(({ theme }) => ({
  size: 30,
  color: theme.colors.primary,
}))`
  margin: 0 5px;
`;
