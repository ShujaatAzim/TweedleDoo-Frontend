import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div>
        {this.props.content}
        <button onClick={() => this.props.deleteItem(this.props.id)}>
          X
        </button>
      </div>
    );
  }
}
export default Item;