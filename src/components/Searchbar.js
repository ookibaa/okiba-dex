import React, { useState } from "react";


const Searchbar = (props) =>{

    const {onSearch} = props


    const [search, setSearch] = useState('ditto')

    const onChangeHandler = (e) =>{
    
        setSearch(e.target.value)
    }
    
    const onSearchHandler = () =>{
        console.log('clicou no buscar e buscou o pokemon: ' + search)

        const pokemon = onSearch(search)
    }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" type="text" onChange={onChangeHandler} />
            </div>

            <div className="searchbar-btn">
                <button placeholder="Buscar pokemon" type="text" onClick={onSearchHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar