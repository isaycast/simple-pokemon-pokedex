import React from 'react'

function PokemonButton({title, actionToPerform}) {
  
  return (
    <div className='text-center'>
      <button className="btn btn-primary m-2" onClick={actionToPerform} >
          {title}
      </button>   
    </div>
  )
}
export {PokemonButton}
