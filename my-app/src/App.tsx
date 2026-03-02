import './App.css';
import Nav from './components/nav';
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import About from './pages/about-us';
import Product from './pages/product';
import Platform from './pages/platform';
import BookAppointment from './pages/book-an-appointment';
import Solutions from './pages/solutions';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/platform' element={<Platform />} />
        <Route path='/book-an-appointment' element={<BookAppointment/>} />
        <Route path='/solutions' element={<Solutions/>} />

      </Routes>
      <Footer />
    </main>
  );
}

export default App;