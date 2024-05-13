import React, { useState } from 'react';

function EditPokemon({ pokemon, onSave, onCancel }) {
    const BASESTATS_KEYS=[ 'hp', 'attack', 'defense', 'speed', 'special_attack', 'special_defense']
    const [formData, setFormData] = useState({
        name: pokemon.name,
        types: pokemon.types.join(', '),
        abilities: pokemon.abilities.join(', '),
        height: pokemon.height,
        weight: pokemon.weight,
        base_stats: pokemon.base_stats,
        spriteUrl: pokemon.sprite_url
    });



    const handleChange = (event) => {
        const { name, value } = event.target;
        if (BASESTATS_KEYS.includes(name)) {
            setFormData(prev => ({
                ...prev,
                base_stats: {
                    ...prev.base_stats,
                    [name]: parseInt(value) < 0 ? 0 : parseInt(value) 
                }
            }));
            return;
        }
        if (name ==='height' || name === 'weight') {
            setFormData(prev => ({ ...prev, [name]: parseInt(value) < 0 ? 0 : parseInt(value)  }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedPokemon = {
            ...pokemon,
            name: formData.name,
            types: formData.types.split(',').map(type => type.trim()),
            abilities: formData.abilities.split(',').map(ability => ability.trim()),
            height: parseInt(formData.height),
            weight: parseInt(formData.weight),
            base_stats: formData.base_stats,
            spriteUrl: formData.spriteUrl
        };
        onSave(updatedPokemon);
    };

    return (
        <div className="container mt-4">
            <h2 className='text-center'>Editar Pokémon</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="types" className="form-label">Tipos</label>
                    <input type="text" className="form-control" id="types" name="types" value={formData.types} disabled/>
                </div>
                <div className="mb-3">
                    <label htmlFor="abilities" className="form-label">Habilidades</label>
                    <input type="text" className="form-control" id="abilities" name="abilities" value={formData.abilities} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="height" className="form-label">Altura</label>
                    <input type="number" className="form-control" id="height" name="height" value={formData.height} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="weight" className="form-label">Peso</label>
                    <input type="number" className="form-control" id="weight" name="weight" value={formData.weight} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="spriteUrl" className="form-label">URL de la Imagen</label>
                    <input type="text" className="form-control" id="spriteUrl" name="spriteUrl" value={formData.spriteUrl} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="hp" className="form-label">hp</label>
                    <input type="number" className="form-control" id="hp" name="hp" value={formData.base_stats.hp}  onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="attack" className="form-label">attack</label>
                    <input type="number" className="form-control" id="attack" name="attack" value={formData.base_stats.attack} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="defense" className="form-label">defense</label>
                    <input type="number" className="form-control" id="defense" name="defense" value={formData.base_stats.defense} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="speed" className="form-label">speed</label>
                    <input type="number" className="form-control" id="speed" name="speed" value={formData.base_stats.speed}  onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="special_attack" className="form-label">special-attack</label>
                    <input type="number" className="form-control" id="special_attack" name="special_attack" value={formData.base_stats.special_attack} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="special_defense" className="form-label">special-defense</label>
                    <input type="number" className="form-control" id="special_defense" name="special_defense" value={formData.base_stats.special_defense} onChange={handleChange}  />
                </div>
                
                <div className='d-flex align-items-center justify-content-center'>
                    <button type="submit" className="btn btn-primary m-2">Guardar Cambios</button>
                    <button type="button" className="btn btn-secondary m-2" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export  {EditPokemon};
