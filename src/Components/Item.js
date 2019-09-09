import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={() => this.props.deleteItem(this.props.name)}>
          X
        </button>
      </div>
    );
  }
}
export default Item;