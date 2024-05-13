import React from "react"
import {PokemonButton} from "../PokemonButton/PokemonButton"


function CardView({ pokemon, buttonConfig }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
        <div className="card mt-3" style={{ borderRadius: "1rem" }}>
        <img className="card-img-top" src={pokemon.sprite_url} alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title text-center" style={{ height: "3rem" }}>{pokemon.name}</h5>
            <PokemonButton title={buttonConfig.title} actionToPerform={buttonConfig.action}/>
        </div>
    </div>
  </div>
  )
}

export default CardView