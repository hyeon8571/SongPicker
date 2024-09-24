import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PayingPage from './pages/PayingPage';
import MainPage from './pages/MainPage';
import ChartPage from './pages/ChartPage';
import KaraokeVideoPage from './pages/KaraokeVideoPage';

const router = createBrowserRouter([
  {
    path: '/karaoke',
    element: <LandingPage />,
  },
  {
    path: '/karaoke/paying',
    element: <PayingPage />,
  },
  {
    path: '/karaoke/main',
    element: <MainPage />,
  },
  {
    path: '/karaoke/chart',
    element: <ChartPage />,
  },
  {
    path: '/karaoke/video',
    element: <KaraokeVideoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
