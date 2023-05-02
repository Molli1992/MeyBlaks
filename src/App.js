import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from "./components/slider/slider";




function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Slider />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
