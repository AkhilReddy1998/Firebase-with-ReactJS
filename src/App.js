import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
    };
  }
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="personName"
                placeholder="What's your name?"
              />
              <input
                type="text"
                id="dishName"
                placeholder="What are you bringing?"
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul></ul>
            </div>
          </section>
        </div>
        <section className="display-item">
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>brought by: {item.user}</p>
                    <button onClick={() => this.removeItem(item.id)}>
                      Remove Item
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var personName = document.getElementById("personName");
    var dishName = document.getElementById("dishName");
    const item = {
      title: dishName.value,
      user: personName.value,
    };
    const itemsRef = firebase.database().ref("items");
    itemsRef.push(item);
    personName.value = "";
    dishName.value = "";
  };
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  componentDidMount() {
    console.log("Inside componentDidMount");
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }
}
export default App;
