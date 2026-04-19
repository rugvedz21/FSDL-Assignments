import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Submit from './pages/Submit.jsx';
import Dashboard from './pages/Dashboard.jsx';

function Nav() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  return (
    <nav>
      <Link to="/">Feedback</Link>
      {user?.role === 'student' && <Link to="/submit">Submit</Link>}
      {user?.role === 'admin' && <Link to="/dashboard">Dashboard</Link>}
      <span className="spacer" />
      {user ? (
        <>
          <span>{user.name} ({user.role})</span>
          <button onClick={() => { logout(); nav('/login'); }}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

function Protected({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function App() {
  const { user } = useAuth();
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to={user.role === 'admin' ? '/dashboard' : '/submit'} /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit" element={<Protected role="student"><Submit /></Protected>} />
          <Route path="/dashboard" element={<Protected role="admin"><Dashboard /></Protected>} />
        </Routes>
      </div>
    </>
  );
}
