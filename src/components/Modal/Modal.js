import React from 'react'
import {PokemonButton} from '../PokemonButton/PokemonButton'

function PokemonModal({showButtons, modalBodyMessage, primaryButtonTitle, secondaryButtonTitle, primaryButtonAction, secondaryButtonAction}) {
  return (
    <div className="modal fade show" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">

                <div className="modal-body text-center">
                  <h5 style={{ display: "flex", justifyContent: "center" }}>{modalBodyMessage}</h5>


                </div>

                {showButtons &&
                <div class="modal-footer d-flex justify-content-center">
                    <PokemonButton title={primaryButtonTitle} actionToPerform={primaryButtonAction}/>
                    <PokemonButton title={secondaryButtonTitle} actionToPerform={secondaryButtonAction}/>
                </div>}

              </div>
            </div>
          </div>
  )
}



export {PokemonModal}