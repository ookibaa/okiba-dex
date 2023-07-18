import "./App.css";
import Navbar from './components/Navbar';
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./utils/api";
import React from "react";


function App() {

const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon)
  console.log(result)
}

  return (
    <div>
      <Navbar />

      <Searchbar 
        onSearch = {onSearchHandler}
      />

      <div className="App">
        
      </div>
    </div>
  );
}

export default App;
