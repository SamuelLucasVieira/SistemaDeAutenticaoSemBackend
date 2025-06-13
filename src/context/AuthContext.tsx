import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // Simula autenticação sem backend
    setUser(email);
    // Comentado para evitar erro:
    // localStorage.setItem('user', email);
  };

  const logout = () => {
    setUser(null);
    // Comentado para evitar erro:
    // localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
