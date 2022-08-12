import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import Planets from "./pages/Planets";
import Navbar from "./components/Navbar";
import CharacterDetails from "./pages/CharacterDetails";
import MovieDetails from "./pages/MovieDetails";
import PlanetDetails from "./pages/PlanetDetails";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/characters">
            <Route index element={<Characters />} />
            <Route path=":id" element={<CharacterDetails />} />
          </Route>
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":name" element={<MovieDetails />} />
          </Route>
          <Route path="/planets">
            <Route index element={<Planets />} />
            <Route path=":name" element={<PlanetDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
