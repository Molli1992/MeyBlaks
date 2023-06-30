import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import HomeDiseño from "./components/diseño/homeDiseño";
import Nosotros from "./components/sobreNosotros/sobreNosotros";
import Contacto from "./components/contactanos/contacto";
import Prueba from "./components/prueba/prueba";



function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<Nosotros />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/diseño" element={<HomeDiseño />} />
        <Route path="/prueba" element={<Prueba />} />

      </Routes>

    </BrowserRouter>

  );

};

export default App;
