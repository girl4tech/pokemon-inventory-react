import React from 'react';
import CartComponent from '../components/CartComponent'

class ViewContainer extends React.Component {
  state = {
    data: {},
    showPokemonInfo: false,
    btnName: 'SHOW',
    level: 1
  }
  componentDidMount(){
    const { location} = this.props;
    const that = this;
    console.log(location)
    fetch(location.state.url)
    .then(response => response.json())
    .then(data =>  that.setState({data}))
  }

  levelUp (){
    let level = this.state.level
    level += 5
    this.setState({
      level
    })
  }
  toggleView = () => {
    const {showPokemonInfo} = this.state;
    let btnName = showPokemonInfo ? 'HIDE' : 'SHOW'
    this.setState({
      btnName,
      showPokemonInfo: !showPokemonInfo
    })
  }
  render(){
    const { location, fetchPokemonData} = this.props;
    const {data, showPokemonInfo, btnName} = this.state;
    return(
      <div>
        <h1>Pokemon View</h1>
        {location.state.name}
        <button onClick={this.toggleView}>{btnName}</button>
        <p>{data.base_experience}</p>

        {
          showPokemonInfo ?
            data.abilities ? data.abilities.map(item => {
              return(
                <div className="container">
                  <div>{item.ability.name}</div>
                </div>
              );
            }) : null : null
        }
      </div>
    )
  }
}

export default ViewContainer
