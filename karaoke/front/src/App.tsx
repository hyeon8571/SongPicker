import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PayingPage from './pages/PayingPage';
import MainPage from './pages/MainPage';
import KaraokeVideoPage from './pages/KaraokeVideoPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/paying',
      element: <PayingPage />,
    },
    {
      path: '/main',
      element: <MainPage />,
    },
    {
      path: '/video',
      element: <KaraokeVideoPage />,
    },
  ],
  {
    basename: '/karaoke',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
