import './App.css';
import Home from './pages/home';
import Layout from "./pages/layout"
import Sem1 from './pages/sem/sem1';
import Sem2 from './pages/sem/sem2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter basename='/'>
        <Home/>
        <Routes>
          <Route path="/textbook" element={<Layout/>}>
            <Route index path="/textbook" element={<Sem1/>} />
            <Route path="pages/sem2" element={<Sem2/>} />
            <Route path="pages/sem3" element={<Sem2/>} />
            <Route path="pages/sem4" element={<Sem2/>} />
            <Route path="pages/sem5" element={<Sem2/>} />
            <Route path="pages/sem6" element={<Sem2/>} />
            <Route path="pages/sem7" element={<Sem2/>} />
            <Route path="pages/sem8" element={<Sem2/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
