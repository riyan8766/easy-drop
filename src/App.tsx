
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePageLayout from './components/HomePageLayout/HomePageLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Partner from "./pages/Partner/partner";
import Tour from "./pages/Tour/Tour";
import Pick from "./pages/PickDrop/Pick-drop";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="pick-drop" element={<Pick />} />
          <Route path="travel" element={<Tour />} /> 
          <Route path="partner" element={<Partner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
