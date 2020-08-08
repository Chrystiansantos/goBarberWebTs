import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  /* dessa forma estou pegando todas as propriedade e passango para dentro do button */
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} type="text" />
  </Container>
);

export default Input;
