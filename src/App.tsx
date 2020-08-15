import React from 'react';
import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';

import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Chrystian' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
