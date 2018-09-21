import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {
  render(){
    const {items, removeItem} = this.props;
    return(
      <div style={{
        border:'1px solid black'
      }}>
        <div style={{
          border:'1px solid black'
        }}>
          <h2>Bag Inventory</h2>
        </div>
        <ul>
          {items.map(item => {
            return(
              <div style={
                {
                  textTransform:'uppercase',
                  padding: '2em'
                }
              }>
              {item.name}
              <button onClick={()=> removeItem(item)}> REMOVE</button>
              <Link to={{
              pathname: '/pokemon',
              search: `?selected=${item.name}`,
              state: {
                name: item.name,
                url: item.url
              }
              }}>
              View
              </Link>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Cart;
