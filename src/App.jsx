import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes> 
       <Route path="/Contact"
       element={<Contact/>}/>   
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
