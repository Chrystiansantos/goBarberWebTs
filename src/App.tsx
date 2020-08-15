import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SignIn />
  </>
);

export default App;
