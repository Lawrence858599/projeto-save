import React, { useState } from 'react';
import Login from './components/Login.js';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Aqui você pode implementar autenticação real
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
