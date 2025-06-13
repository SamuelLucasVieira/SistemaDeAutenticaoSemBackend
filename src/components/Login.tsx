import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>E-mail:</label>
            <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label>Senha:</label>
            <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Entrar</button>
        </form>
    </div>
    );
};

export default Login;
