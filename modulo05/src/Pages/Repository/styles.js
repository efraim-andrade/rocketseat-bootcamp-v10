import styled from 'styled-components';

export const Loading = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  > a {
    color: #7159c1;
    font-size: 16px;
  }

  > img {
    width: 120px;
    margin-top: 20px;
    border-radius: 50%;
  }

  > h1 {
    margin-top: 10px;

    font-size: 24px;
  }

  > p {
    margin-top: 5px;
    max-width: 400px;

    color: #666;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;

  > li {
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;

    display: flex;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
          border-radius: 2px;

          color: #333;
          background: #eee;
          font-size: 12px;
          font-weight: 600px;
        }
      }

      p {
        margin-top: 5px;

        color: #999;
        font-size: 12px;
      }
    }
  }
`;
