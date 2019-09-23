import React from "react";
import Item from "./Item";

class List extends React.Component {
  state = {
    allItems: [],
    newItem: ""
  };

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    fetch("http://localhost:3000/items")
    .then(resp => resp.json())
    .then(items => this.setState({
        allItems: items
    }))
  }

  newItem = event => {
    event.preventDefault();
    this.setState({
      newItem: event.target.value
    });
  };

  addNewItem = event => {
    event.preventDefault();
    const payload = { item: {content: this.state.newItem}}

    if (this.state.newItem.trim() !== "") {
      fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(this.getItems)
      .then(this.setState({
        newItem: ""
      }))
    } else {
      console.log("it be blank dawg")
      this.setState({
        newItem: ""
      })
    }
  };

  deleteItem = content => {
    const newItems = this.state.allItems.filter(item => item.content !== content);
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
              <Item key={index} content={item.content} deleteItem={this.deleteItem} />
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
