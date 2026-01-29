import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes></Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
