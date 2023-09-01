import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const PrivateRoute: React.FC<{ component: React.ElementType }> = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn ? <Component /> : <Navigate to="/" />
  );
};

export default PrivateRoute;
