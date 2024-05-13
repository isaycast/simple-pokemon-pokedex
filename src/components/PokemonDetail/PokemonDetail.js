import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonDetailCardView from '../PokemonDetailCardView/PokemonDetailCardView';


export default function PokemonDetail() {
    const [pokemon, setPokemon] = useState(null)
    const { id } = useParams();
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/get/id/${id}`)
        .then(response => response.json())
        .then((data) => {setPokemon(data);})
    }, [id])
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          {pokemon ? <PokemonDetailCardView pokemon={pokemon}/> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  )
}
