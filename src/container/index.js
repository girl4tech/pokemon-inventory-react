import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import ItemCard from '../components/ItemCards';
import Cart from '../components/CartComponent';
import logo from '../logo.svg';
import '../App.css';

class IndexContainer extends Component {
  //initial state must match data type of expected property
  state = {
    pokemans: [],
    pokemonItems: [],
    items: []
  };
  componentDidMount(){
    console.log("pokemon");
    this.fetchData('https://pokeapi.co/api/v2/pokemon/', 'pokemans');
    this.fetchData('http://pokeapi.co/api/v2/item/', 'pokemonItems');
  }
  fetchData = (url, name) =>{
    (
      //make an async request
      async ()=>{
        //store API response as pokemonResponse variable
        let response = await fetch(url);
        //convert API response to JSON and store as pokemans variable
        let data = await response.json();
        //
        this.setState({[name]: data.results});
      }
    )();
  }
  //
  addItemToBag =(name, url)=>{
    const {items} = this.state
    if(items.indexOf(name) > -1) {
      return
    }
    this.setState({
      items: [...items, {name, url}]
    })
  }
  //
  removeItemFromBag = (name)=>{
    const {items} = this.state;
    let newItems = items.splice(items.indexOf(name), 0);
    console.log(name)
    console.log(newItems, items.indexOf(name))
    this.setState({
      items: newItems
    })

  }

  selectItem = ()=>{

  }
  //
  displaySelected=()=>{

  }
  //
  evolve(){
    if (this.checkIfPokemonAtLevel() || this.checkIfUserHasItems()){
      this.removeOldPokemonFromBag ();
      this.addNewPokemon();

    }
  }
  render() {
    let pokemonSection = this.state.pokemans.map( (pokemon,index)=>{
      console.log(pokemon)
      return (
        <PokemonCard pokemonName={pokemon.name} url={pokemon.url} addItemToBag={this.addItemToBag} key={index} />
      )
    })
    let itemSection = this.state.pokemonItems.map((item, index)=>{
      return (
        <ItemCard ItemName={item.name} url={item.url} addItemToBag={this.addItemToBag}/>
      )
    })
    return (
      <div className="App">
        <div>
          <h1>Pokemon</h1>
          <Cart removeItem={this.removeItemFromBag} items={this.state.items}/>
        </div>
          {pokemonSection}
        <ul>
          {itemSection}
        </ul>
      </div>
    );
  }
}

export default IndexContainer;
