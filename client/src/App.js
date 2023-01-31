import './App.css';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Admin from './Pages/Admin/Admin';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    )
  );
  return (
    <main className="main">
      <RouterProvider router={router} />
    </main>
  );
}

const Root = () => {
  return <><div>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div></>;
};

export default App;
