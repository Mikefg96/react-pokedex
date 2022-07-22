
export type IStartMenuProps = {
  setIsMenuOpen : (arg0 : Boolean) => void
  setIsPokedexOpen: (arg0: Boolean) => void
  actionAudio: HTMLAudioElement
}

export const initialPokemonState: IPokemon = {
  id: 0,
  name: '',
  height: 0,
  weight: 0,
  sprite: '',
  types: [],
  stats: []
}

export type IPokemon = {
  id: Number
  name: string
  height: number
  weight: number
  sprite: string
  types: IPokemonType[]
  stats: IPokemonStats[]
}

export type IPokemonType = {
  slot: Number
  type: {
    name: string
    url: string
  }
}

export type IPokemonStats = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type ITypeBadgeProps = {
  type: string
}