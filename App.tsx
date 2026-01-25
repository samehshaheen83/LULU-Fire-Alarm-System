import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext.tsx';
import { LanguageProvider } from './components/LanguageContext.tsx';
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import BranchManager from './pages/BranchManager.tsx';
import DetectorManager from './pages/DetectorManager.tsx';
import DetectorQuery from './pages/DetectorQuery.tsx';
import UserManagement from './pages/UserManagement.tsx';

const ProtectedRoute: React.FC<{ children: React.ReactNode; adminOnly?: boolean }> = ({ children, adminOnly = false }) => {
  const { user, isAdmin } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && !isAdmin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/branches" 
              element={<ProtectedRoute adminOnly><BranchManager /></ProtectedRoute>} 
            />
            <Route 
              path="/detectors" 
              element={<ProtectedRoute adminOnly><DetectorManager /></ProtectedRoute>} 
            />
            <Route 
              path="/query" 
              element={<ProtectedRoute><DetectorQuery /></ProtectedRoute>} 
            />
             <Route 
              path="/users" 
              element={<ProtectedRoute adminOnly><UserManagement /></ProtectedRoute>} 
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;