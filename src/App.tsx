import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';
import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
    <ToastContainer />
  </>
);

export default App;
