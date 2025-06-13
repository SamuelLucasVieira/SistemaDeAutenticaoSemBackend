import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
        <h2 className="dashboard-welcome">Bem-vindo, {user}!</h2>
        <button className="logout" onClick={handleLogout}>Sair</button>
    </div>
    );

};

export default Dashboard;
