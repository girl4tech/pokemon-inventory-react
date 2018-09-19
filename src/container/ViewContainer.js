import React from 'react';
import CartComponent from '../components/CartComponent'

class ViewContainer extends React.Component {
  state = {
    data: {}
  }
  componentDidMount(){
    const { location} = this.props;
    const that = this;
    console.log(location)
    fetch(location.state.url)
    .then(response => response.json())
    .then(data =>  that.setState({data}))
  }
  render(){
    const { location} = this.props;
    return(
      <div>
        <h1>Pokemon View</h1>
        {location.state.name}
      <p>{this.state.data.base_experience}</p>
      </div>
    )
  }
}

export default ViewContainer
