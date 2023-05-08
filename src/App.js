import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Inicio from "./components/inicio/inicio";
import Contacto from "./components/contacto/contacto";
import Nosotros from "./components/nosotros/nosotros";
import Diseño from "./components/diseño/diseño";



function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/diseño" element={<Diseño />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
