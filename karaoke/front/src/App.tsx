import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './fixgit/LandingPage';
import PayingPage from './fixgit/PayingPage';
import MainPage from './fixgit/MainPage';
import ChartPage from './fixgit/ChartPage';
import KaraokeVideoPage from './fixgit/KaraokeVideoPage';

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
