import React, { useEffect, useState } from 'react'

import { initialPokemonState, IPokemon, IPokemonType, ITypeBadgeProps } from '../types'
import { getBadgeStyles, getColorByType } from '../helpers/functions'

const Pokedex = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [hasError, setHasError] = useState<Boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [pokemon, setPokemon] = useState<IPokemon>(initialPokemonState)
 
  // Debounce function to handle API calls
  useEffect(() => {
    if(!inputValue) { return }

    const delayDebounceFn = setTimeout(() => {
      setIsLoading(true)

      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
        .then(response => { return response.json() })
        .then(response => structurePokeapiResponse(response))
        .catch(error => setHasError(true))
        .finally(() => setIsLoading(false))
    }, 1500)

    return () => clearTimeout(delayDebounceFn)
  }, [inputValue])

  const structurePokeapiResponse = (res: any) => {
    setHasError(false)
  
    const pokemon: IPokemon = {
      id: res.id,
      name: res.name,
      height: res.height,
      weight: res.weight,
      sprite: res.sprites.front_default,
      types: res.types,
      stats: res.stats
    }

    setPokemon(pokemon)
    setIsLoading(false)
  } 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = event.target.value.replace(/[^a-z-2]/, '')
    cleanValue.length < 13 && setInputValue(cleanValue)
  }

  const LoadingAsh = () => {
    return(
      <div className='is-loading'>
        <i className='nes-ash'/>
        <p>Loading...</p>
      </div>  
    )
  }

  const LoadingStarters = () => {
    return(
      <div className='is-loading'>
        <div>
          <i className='nes-bulbasaur'/>
          <i className='nes-charmander'/>
          <i className='nes-squirtle'/>
        </div>
        <p>Loading...</p>
      </div>  
    )
  }

  const TypeBadge = ({ type } : ITypeBadgeProps) => {
    return(
      <div className='nes-badge' style={{ backgroundColor: getColorByType(type), marginRight: '1rem' }}>
        <span className='is-primary' style={ getBadgeStyles(type) }>{type}</span>
      </div>
    )
  }

  return (
    <div className='pokedex-wrapper'> 
    { pokemon.name && (
      <>
        <div className='nes-container is-rounded is-dark sprite-container'>
        { isLoading ? <LoadingAsh />
        : 
          <>
            <h3 className='capitalize'>{pokemon.name}</h3>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p>No. {pokemon.id.toString().padStart(3, '0')}</p>
          </>
        }
        </div>
        <div className='nes-container is-rounded is-dark details-container'>
          { isLoading ? <LoadingStarters/> 
          :
          <>
            <div className='nes-container is-rounded is-dark with-title'>
              <h3 className='title'>Type(s)</h3>
              { pokemon.types.map((type: IPokemonType) => (
                <TypeBadge type={type.type.name}/>
              )) } 
            </div>
            <div className='lists'>
              <ul className='nes-list is-circle'>
                <li>{pokemon.height / 10} meters</li>
                <li>{pokemon.weight / 10} kilograms</li>
              </ul>
              <p>Stats</p>
              <ul className="nes-list is-circle">
              { pokemon.stats.map((stat) => (
                  <li>{stat.base_stat} {stat.stat.name}</li>
                )) }
              </ul>
            </div>
          </>  
          }
        </div>
      </>
    )}
      <div className='nes-container with-title is-rounded search-container'>
        <h3 className='title max-content'>{ hasError ? 'Pokémon not found' : 'Search your favorite Pokémon!' }</h3>
        <div className='nes-field'>
          <label>Pokémon name</label>
          <input type='text' className={`nes-input ${hasError && 'is-error'}`} placeholder='Ex. Pikachu'
            value={inputValue} onChange={e => handleInputChange(e)}/>
        </div>
      </div>
    </div>
  )
}

export default Pokedex