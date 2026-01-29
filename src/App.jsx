import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;
