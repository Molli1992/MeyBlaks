import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import Diseño from "./components/diseño/diseño";
import Nosotros from "./components/sobreNosotros/sobreNosotros";
import AllReviews from "./components/allReviews/allReviews";
import Contacto from "./components/contactanos/contacto";



function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<Nosotros />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/diseño" element={<Diseño />} />

      </Routes>

    </BrowserRouter>

  );

};

export default App;
