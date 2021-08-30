import { Navigate } from 'react-router-dom';
import MainLayout from 'src/components/MainLayout';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import ForgotPassword from 'src/pages/ForgotPassword';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'passwordrecovery', element: <ForgotPassword /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/register" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
