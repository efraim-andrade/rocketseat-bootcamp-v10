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

export const Filters = styled.div`
  padding-top: 30px;
  margin: 30px auto 10px;
  border-top: 1px solid #eee;

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
  }
`;

export const Filter = styled.button.attrs({
  type: 'button',
})`
  margin: 0 5px;
  border-radius: 4px;
  padding: 4px 6px;
  border: 1px solid #7159c1;

  color: #fff;
  background: #7159c1;
  opacity: ${props => (props.state ? 1 : 0.8)};
`;

export const IssueList = styled.ul`
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

export const Actions = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button.attrs(props => ({
  disabled: props.pages < 1,
}))`
  border-radius: 4px;
  padding: 10px 14px;
  border: 1px solid #7159c1;

  color: #fff;
  background: #7159c1;

  &[disabled] {
    opacity: 0.5;
  }
`;
