import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  /* rest é a mesma coisa que as props */
  <Container type="button" {...rest}>
    {loading ? 'Carregando ...' : children}
  </Container>
);

export default Button;
