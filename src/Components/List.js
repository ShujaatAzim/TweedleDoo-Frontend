import React from "react";
import Item from "./Item";

class List extends React.Component {
  state = {
    allItems: [],
    newItem: ""
  };

  componentDidMount() {
    let itemList = [
      { name: "Networking" },
      { name: "Project" },
      { name: "Algorithms" },
      { name: "Learning" }
    ];
    this.setState({
      allItems: itemList
    });
  }

  newItem = event => {
    event.preventDefault();
    this.setState({
      newItem: event.target.value
    });
  };

  addNewItem = event => {
    event.preventDefault();
    if (this.state.newItem.trim() !== "") {
      this.setState({
        allItems: [...this.state.allItems, { name: this.state.newItem }],
        newItem: ""
      });
    } else {
      this.setState({
        newItem: ""
      });
    }
  };

  deleteItem = name => {
    const newItems = this.state.allItems.filter(item => item.name !== name);
    this.setState({
      allItems: newItems
    });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.allItems.map((item, index) => {
            return (
              <Item key={index} name={item.name} deleteItem={this.deleteItem} />
            );
          })}
        </div>
        <div>
          <form onSubmit={this.addNewItem}>
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.newItem}
            />
            <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default List;
