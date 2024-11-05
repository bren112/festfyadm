import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegar

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
      onLogin();
      navigate('/'); // Redireciona para a página inicial após o login
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <h2 id='title_home'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input  id='input'
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input id='input'
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
