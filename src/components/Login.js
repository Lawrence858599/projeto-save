import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação simples para demonstrar o login
    if (username && password) {
      onLogin();
    } else {
      alert('Preencha os campos de usuário e senha.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Usuário" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="form-group remember-me">
          <label className="switch">
            <input 
              type="checkbox" 
              checked={remember} 
              onChange={() => setRemember(!remember)} 
            />
            <span className="slider"></span>
          </label>
          <span>Lembrar de mim</span>
        </div>
        <div className="form-group">
          <button type="button" className="forgot-btn">Esqueci minha senha</button>
        </div>
        <div className="form-group">
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
