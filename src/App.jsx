import Home from './home/Home';
// import Navbar from './navbar/Navbar';
// import Footer from './footer/Footer';
import About from './about/About';
import Portfolio from './PROTFOLIO/PROTFOLIO'; // Renamed to avoid all caps
import Contact from './CONTACT/CONTACT'; // Renamed to avoid all caps
import Layout from './leyOut/leyOut'; // Renamed to follow consistent casing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './notFound/NotFound';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Layout for consistent header/footer
      children: [
        { path: '', element: <Home /> }, // Default route
        { path: 'home', element: <Home /> }, // Default route
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> }, // Corrected spelling
        { path: 'contact', element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    // Fallback for unmatched routes
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
