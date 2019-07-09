import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  max-width: 700px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  background: #fff;

  > h1 {
    display: flex;
    align-items: center;
    flex-direction: row;

    font-size: 20px;

    > svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
