import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 100px 10px;

  h2 {
    width: 550px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 44px;
    font-weight: bold;
    margin: 30px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50vw;

  padding: 20px;

  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.white};

  input {
    border: none;
    width: 70%;

    margin-left: 40px;
    font-size: 28px;
  }

  button {
    font-weight: normal;
    width: 25%;
    padding: 30px;
    border-radius: 50px;
  }
`;
