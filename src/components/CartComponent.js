import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {
  render(){
    const {items, removeItem} = this.props;
    return(
      <div>
        <h2>Cart</h2>
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
            //  state: {} Pass state from index.js email mike@hapyak.com with any questions
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
