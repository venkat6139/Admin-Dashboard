import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListingPage from './pages/UserListingPage';
import PostListingPage from './pages/PostListingPage';
import LoginPage from './pages/LoginPage';
import NavigationBar from './components/NavigationBar';
import { LoginProvider, LoginContext } from './context/LoginContext';
import './App.css';

function App() {
  return (
    <LoginProvider>
      <Router>
        <div className="App">
          <LoginContext.Consumer>
            {({ isLoggedIn }) => (
              <>
                {isLoggedIn && <NavigationBar />}
                <div className={isLoggedIn ? 'content' : ''}>
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                      path="/dashboard"
                      element={<PrivateRoute component={HomePage} />}
                    />
                    <Route
                      path="/users"
                      element={<PrivateRoute component={UserListingPage} />}
                    />
                    <Route
                      path="/posts"
                      element={<PrivateRoute component={PostListingPage} />}
                    />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                  </Routes>
                </div>
              </>
            )}
          </LoginContext.Consumer>
        </div>
      </Router>
    </LoginProvider>
  );
}

// Custom PrivateRoute component to protect routes
const PrivateRoute = ({ component: Component }) => {
  return (
    <LoginContext.Consumer>
      {({ isLoggedIn }) =>
        isLoggedIn ? <Component /> : <Navigate to="/login" replace />
      }
    </LoginContext.Consumer>
  );
};

export default App;
