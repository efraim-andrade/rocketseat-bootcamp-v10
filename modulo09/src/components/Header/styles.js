import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;

  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      color: #7159c1;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  display: flex;

  div {
    margin-right: 10px;

    text-align: right;

    strong {
      display: block;

      color: #333;
    }

    a {
      margin-top: 2px;

      display: block;

      color: #999;
      font-size: 12px;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
