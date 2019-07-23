import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/theme';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    margin-top: 20px;

    display: flex;
    flex-direction: column;

    input {
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      border: 0;
      border-radius: 12px;

      color: #fff;
      background: rgba(0, 0, 0, 0.1);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      margin: 0 0 10px;

      align-self: flex-start;

      color: #fb6f91;
      font-size: 12px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      margin: 10px 0 20px;

      background: rgba(255, 255, 255, 0.2);
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      border: 0;
      border-radius: 4px;

      color: #fff;
      transition: 0.3s;
      font-size: 16px;
      font-weight: bold;
      background: ${colors.primary};

      &:hover {
        background: ${darken(0.03, colors.primary)};
      }
    }

    a {
      margin-top: 15px;

      color: #fff;
      opacity: 0.8;
      font-size: 16px;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    height: 44px;
    width: 100%;
    margin: 10px 0 0;
    border: 0;
    border-radius: 4px;

    color: #fff;
    transition: 0.3s;
    font-size: 16px;
    font-weight: bold;
    background: ${colors.danger};

    &:hover {
      background: ${darken(0.08, colors.danger)};
    }
  }
`;
