import React from 'react'

class PokemonCard extends React.Component {
  state = {
    data: ''
  }
  fetchPokemonData = (name, url) => {
    this.props.addItemToBag(name, url)
  }
  render() {
    const {pokemonName, url} = this.props
    return(
      <div style={{
        display: 'inline-block',
        margin: '2em',
        border:'1px solid black',
        padding:'10px'

      }} onClick={()=>this.fetchPokemonData(pokemonName, url)}>
        {pokemonName}
      </div>
    )

  }
}
export default PokemonCard;
