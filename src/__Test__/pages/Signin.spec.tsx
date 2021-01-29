import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '../../pages/signin';

// Aqui eu crio uma funcao que seja uma dependencia externa do meu componente
// jest.mock('nome do pacote que sera chamado', oque eu desejo retornar quando ele for chamado
jest.mock('react-router-dom', () => {
  return {
    // jest.fn() consiste em uma funcao vazia que nao tem funcionalidade alguma
    useHistory: jest.fn(),
    // aqui eu chamo uma funcao que ira receber parametros no children e ira retornar o mesmo
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able sign', () => {
    // aqui irei conseguir pegar os elementos denro do meu html, para manipula-lo
    const { debug } = render(<SignIn />);

    debug();
  });
});
