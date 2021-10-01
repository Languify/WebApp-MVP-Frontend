import { Navigate } from 'react-router-dom';
import MainLayout from 'src/components/MainLayout';
import Homepage from 'src/pages/homepage';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import Register from 'src/pages/Register';
import ForgotPassword from 'src/pages/ForgotPassword';
import Validate from 'src/pages/Validate';

import DashboardLayout from 'src/components/dashboard-layout';
import Home from 'src/pages/dashboard/home';
import Speaking from 'src/pages/dashboard/speaking';
import Writing from 'src/pages/dashboard/writing';
import Meeting from 'src/pages/dashboard/meeting';

const routes = [
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'speaking', element: <Speaking /> },
      { path: 'writing', element: <Writing /> },
      { path: 'meeting', element: <Meeting /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }, {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Register /> },
      { path: 'passwordrecovery', element: <ForgotPassword /> },
      { path: 'validate', element: <Validate /> },
      { path: '404', element: <NotFound /> },
      { path: '/home', element: <Homepage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
