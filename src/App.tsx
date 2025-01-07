import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviesProvider } from "./context/MoviesContext";
import { PopularSeries } from "./pages/PopularSeries";
import { SeriesProvider } from "./context/PopularSeriesContext";

function App() {
  return (
    <>
      <MoviesProvider>
        <SeriesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular-series" element={<PopularSeries />} />
            </Routes>
          </BrowserRouter>
        </SeriesProvider>
      </MoviesProvider>
    </>
  );
}

export default App;
