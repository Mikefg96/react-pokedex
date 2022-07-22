export const getColorByType = (type: string) : string => {
  switch(type) {
    case 'normal':
      return '#A8A77A'

    case 'fire':
      return '#EE8130'

    case 'water':
      return '#6390F0'

    case 'electric':
      return '#F7D02C'

    case 'grass':
      return '#7AC74C'

    case 'ice':
      return '#96D9D6'

    case 'fighting':
      return '#C22E28'

    case 'poison':
      return '#A33EA1'

    case 'ground':
      return '#E2BF65'
    
    case 'flying':
      return '#A98FF3'

    case 'psychic':
      return '#F95587'
    
    case 'bug':
      return '#A6B91A'

    case 'rock':
      return '#B6A136'

    case 'ghost':
      return '#735797'

    case 'dragon':
      return '#6F35FC'

    case 'dark':
      return '#705746'
    
    case 'steel':
      return '#B7B7CE'

    case 'fairy':
      return '#D685AD'

    default:
      return ''
  }
}

export const getBadgeStyles = (type: string) => {
  const typeColor = getColorByType(type)

  return {
    backgroundColor: typeColor,
    boxShadow: `0 0.5em ${typeColor}, 0 -0.5em ${typeColor}, 0.5em 0 ${typeColor}, -0.5em 0 ${typeColor}`,
    textShadow: 'rgb(0 0 0) 3px 3px 0px, rgb(0 0 0) -1px -1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px 1px 0px, rgb(0 0 0) 1px 1px 0px'
  }
} 