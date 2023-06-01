import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/inicio/inicio";
import Diseño from "./components/diseño/diseño";



function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/diseño" element={<Diseño />} />

      </Routes>

    </BrowserRouter>

  );

};

export default App;
