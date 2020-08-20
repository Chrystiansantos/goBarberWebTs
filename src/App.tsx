import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
