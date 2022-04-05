import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app relative'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='work' element={<Work />} />
        <Route path='skills' element={<Skills />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
