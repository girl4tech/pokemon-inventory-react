import React from 'react'

class ItemCards extends React.Component{
  state = {
    data: null,
  }
  fetchItemData = (name, url) => {
    this.props.addItemToBag(name, url)
  }
  render() {
    const {ItemName, url} = this.props
    return(
      <div style={{
        display: 'inline-block',
        margin: '2em',
        border:'1px solid black',
        padding:'10px'

      }} onClick={()=>this.fetchItemData(ItemName, url)}>{ItemName} {this.state.data}
      </div>
      // <div>
      //   <li onClick={()=>this.fetchItemData(ItemName, url)}>{ItemName} {this.state.data}</li>
      // </div>
    )

  }
}
export default ItemCards;
