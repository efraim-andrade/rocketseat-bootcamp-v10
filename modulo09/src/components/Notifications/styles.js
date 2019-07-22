import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  border: 0;

  background: none;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;

        width: 8px;
        height: 8px;
        border-radius: 50%;

        content: '';
        background: #ff892e;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  top: calc(100% + 30px);
  left: calc(50% - 130px);

  width: 260px;
  padding: 15px 5px;
  border-radius: 4px;

  display: ${props => (props.visible ? 'block' : 'none')};

  background: rgba(0, 0, 0, 0.6);

  &::before {
    position: absolute;
    top: -20px;
    left: calc(50% - 20px);

    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);

    content: '';
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    margin-bottom: 5px;

    opacity: 0.6;
    font-size: 12px;
  }

  button {
    border: 0;

    font-size: 12px;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        width: 8px;
        height: 8px;
        margin-left: 10px;
        border-radius: 50%;

        display: inline-block;

        content: '';
        background: #ff892e;
      }
    `}
`;
