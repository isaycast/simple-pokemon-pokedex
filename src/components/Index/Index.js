import React from 'react'
import { useState, useRef, useEffect } from 'react'
import {PokemonButton} from '../PokemonButton/PokemonButton'
import CardView from '../CardView/CardView'
import {useNavigate } from 'react-router-dom'


export default function Index() {
    const [publicPokemon, setPublicPokemon] = useState([])
    const [pokemonRegistered, setPokemonRegistered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/all-pokemons-registered`)
        .then(response => response.json())
        .then(data => setPokemonRegistered(data))
    }, [])

    
        


    const inputRef = useRef();

    const findPokemon = ()=>{
        fetch(`${process.env.REACT_APP_API_URL}/find/name-id/${inputRef.current.value}`)
        .then(response => response.json())
        .then((data) => {setPublicPokemon(data);})
    }
    const hanndleKeyDown = (e) => {
        if(e.key === 'Enter'){
        findPokemon()
        }
      }
  return (
    <div className='container' style={{marginTop:"2rem"}}>
        
        <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8 col-xs-12 text-center">
                <div className="input-group mb-3">
                    <input type="text" className="form-control me-2" style = {{borderRadius:"1rem"}} placeholder="<id> o <nombre de pokemon>" ref={inputRef} onKeyDown={hanndleKeyDown} />
                    <div className="input-group-append">
                    <PokemonButton title={"Buscar pokemon"} actionToPerform={findPokemon} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center text-center">
            {inputRef.current && inputRef.current.value === "" && <h2>Buscar pokemon</h2>}
            {publicPokemon.length === 0 && inputRef.current && inputRef.current.value !== "" && <h2>No se encontraron resultados</h2>}
            {publicPokemon.map((pokemon, index) => {
                return <CardView key={index} pokemon={pokemon} buttonConfig={{title: "Agregar a pokedex", action: () => {
                    fetch(`${process.env.REACT_APP_API_URL}/add`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                          },
                        body: JSON.stringify(pokemon),

                    })
                    .then((response) => {
                        if(response.status === 400){
                            alert("El pokemon ya se encuentra registrado");
                        }                                                                                                                                                                                                                                                                                          
                    })
                    .then(()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/all-pokemons-registered`)
                        .then(response => response.json())
                        .then(data => setPokemonRegistered(data))
                    })
                    .catch(error => console.error('Error:', error))
                }}}
                />
            })
            }
        </div>
        
        <hr/>
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <h2>Pokedex</h2>
                </div>
            </div>
            <div className='row'>
            {pokemonRegistered.map((pokemon, index) => {
                return <CardView key={index} pokemon={pokemon} buttonConfig={{title: "Información", action: () => {
                    navigate(`/pokemon/${pokemon.pokemon_id}`)
                }}}
                />
            })
            }
            </div>
        </div>
        
    </div>
  )
}
