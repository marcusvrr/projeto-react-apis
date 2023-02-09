import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokemondexPage";
import ErrorPage from "../Pages/Error/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details" element={<PokemonDetailPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
