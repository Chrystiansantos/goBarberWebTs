import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${props =>
    props.isField &&
    css`
      color: #ff9000;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;
    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
