import React from 'react';
import { AuthProvider, useAuth } from './util/AuthContext'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { QuizzScreen } from './screens/QuizzScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import PrivateRoute from './util/PrivateRoute';

function App() {
  

  return (
     <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<PrivateRoute component={HomeScreen} />} />
          <Route path="/quizz" element={<PrivateRoute component={QuizzScreen} />} />
          <Route path="/details" element={<PrivateRoute component={DetailsScreen} />} />
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
