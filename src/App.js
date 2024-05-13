import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index/Index.js";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.js";



function App() {
  return (
    <Router>
        <Routes> 
          <Route path="/" element={<Index />} />
          <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
        </Routes>
       </Router>
  
  );
}

export default App;
