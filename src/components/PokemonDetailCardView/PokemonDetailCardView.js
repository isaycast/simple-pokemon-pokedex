import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {PokemonButton} from '../PokemonButton/PokemonButton';
import {EditPokemon} from '../EditPokemon/EditPokemon';
import {PokemonModal} from '../Modal/Modal';

export default function PokemonDetailCardView({pokemon}) {
    const [showError, setShowError] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [pokemonScore, setPokemonScore] = useState(0);
    const [editPokemon, setEditPokemon] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/score/${pokemon.pokemon_id}`)
        .then((response) => response.json())
        .then((data) => setPokemonScore(data.pokemon_score))
    },[])

    const updatePokemon = (pokemon) => {
        fetch(`${process.env.REACT_APP_API_URL}/update/${pokemon.pokemon_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pokemon)
        })
        .then((response) => {response.json()})
        .then(() => {navigate('/');})
    }
    const deletePokemon = (pokemon) => {
        fetch(`${process.env.REACT_APP_API_URL}/delete/${pokemon.pokemon_id}`,{
            method: 'DELETE',
        })
        .then((response) => { 
            response.status === 204 ? navigate('/'): setShowError(true)} )
    }
  return (
    <div className="card mb-3 mt-4" style={{ maxWidth: '800px'}}>
      <div className={ `row no-gutters  ${editPokemon ? "d-flex justify-content-center": "align-items-center"}`}  >
        <div className="col-md-4 ">
          <img src={pokemon.sprite_url} className="card-img" alt={pokemon.name} />
        </div>
        
        {editPokemon  && <EditPokemon pokemon={pokemon} onSave={updatePokemon}
        onCancel={()=>{setEditPokemon(false)}}/>}
        
        {!editPokemon && <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><strong> {pokemon.name}</strong></h5>
            <label className="card-text"><strong>Types:</strong></label>
            <p className="card-text">
              <ul >
                {pokemon.types.map((type) => (
                  <li key={type}>
                    {type}
                  </li>
                ))}
              </ul>
            </p>
            <label className="card-text"><strong>Abilities:</strong></label>
            <p className="card-text">
              <ul >
                {pokemon.abilities.map((ability) => (
                  <li key={ability}>
                    {ability}
                  </li>
                ))}
              </ul>
            </p>
            <label className="card-text"><strong>Stats:</strong></label>
            <p className="card-text">
              <ul >
                {Object.keys(pokemon.base_stats).map((statName) => (
                  <li key={statName}>
                    {statName}:{pokemon.base_stats[statName]}
                  </li>
                ))}
              </ul>
            </p>
            <label className="card-text"><strong>Score:</strong></label>
            <p className="card-text ms-4">
              {pokemonScore}
            </p>
          </div>
        </div>}
      </div>
      {!editPokemon && 
      <div className='d-flex align-items-center justify-content-center'>
        <PokemonButton title={"Soltar pokemon"} actionToPerform={()=>{
            setShowDeleteModal(true)
        }}/>
        <PokemonButton title={"Editar Pokemon"} actionToPerform={()=>{setEditPokemon(true)}}/>
      </div>}

      {showDeleteModal && <PokemonModal showButtons={true} 
        modalBodyMessage={`¿Estas seguro que deseas soltar a ${pokemon.name}?`}
        primaryButtonTitle={"Soltar pokemon"}
        secondaryButtonTitle={"Cancelar"}
        primaryButtonAction={()=>{deletePokemon(pokemon)}}
        secondaryButtonAction={()=>{setShowDeleteModal(false)}}
    />}
    </div>
  )
}
