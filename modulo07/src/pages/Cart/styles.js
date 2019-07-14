import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;

  background: #fff;

  footer {
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;

      color: #fff;
      font-weight: bold;
      background: #7159c1;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover {
        background: ${darken(0.03, "#7159c1")};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 12px;

    color: #999;
    text-align: left;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      padding: 6px;
      border-radius: 4px;
      border: 1px solid #ddd;

      color: #666;
    }

    button {
      border: 0;
      padding: 6px;

      background: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
