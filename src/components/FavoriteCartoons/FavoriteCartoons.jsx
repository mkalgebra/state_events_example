import React from "react";
import CartoonItem from "../CartoonItem/CartoonItem";

class FavoriteCartoons extends React.Component {
  state = { cartoons: [], newItem: "" };

  setNewItem = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addNewItem = () => {
    if (this.state.newItem === "") return;
    let { cartoons } = this.state;
    cartoons.push(this.state.newItem);
    this.setState({
      cartoons: cartoons,
      newItem: "",
    });
  };

  render() {
    const { cartoons } = this.state;

    return (
      <>
        <div>
          <input
            value={this.state.newItem}
            onChange={(e) => this.setNewItem(e)}
          ></input>
          <button onClick={this.addNewItem}>Add</button>
        </div>
        {cartoons.length === 0 ? (
          <p>No data.</p>
        ) : (
          cartoons.map((c) => <CartoonItem cartoon={c} />)
        )}
      </>
    );
  }
}

export default FavoriteCartoons;
