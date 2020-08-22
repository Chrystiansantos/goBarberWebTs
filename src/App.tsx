import React from 'react';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
