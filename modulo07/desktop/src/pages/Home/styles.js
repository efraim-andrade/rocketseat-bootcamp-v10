import styled from "styled-components";
import { darken } from "polished";

export const ProductList = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  > li {
    padding: 20px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;

    background: #fff;

    > img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      margin-top: 5px;

      color: #333;
      font-size: 16px;
      line-height: 20px;
    }

    > span {
      margin: 5px 0 20px;

      font-size: 21px;
      font-weight: bold;
    }

    > button {
      margin-top: auto;
      border: 0;
      border-radius: 4px;

      display: flex;
      align-items: center;

      color: #fff;
      overflow: hidden;
      background: #7159c1;
      transition: 0.3s;

      &:hover {
        background: ${darken(0.03, "#7159c1")};
      }

      > div {
        padding: 12px;

        display: flex;
        align-items: center;

        background: rgba(0, 0, 0, 0.1);

        > svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;

        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
