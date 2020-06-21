import React, { Component } from 'react';
import '../Components/GroceryList.css';
import Grocery from './Grocery';

class GroceryList extends Component {
  state = {
    groceryList: [],
    name: '',
    description: '',
  };

  generateKey = () => {
    return Math.floor(Math.random() * Date.now()).toString();
  };
  handleAddClick = (e) => {
    this.setState({
      groceryList: [
        ...this.state.groceryList,
        {
          id: this.generateKey(),
          name: this.state.name,
          description: this.state.description,
        },
      ],
    });

    this.setState({
      name: '',
      description: '',
    });
    e.preventDefault();
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDeleteClick = (e) => {
    this.setState({
      groceryList: this.state.groceryList.filter((item) => {
        console.log(e.target, e.target.id);
        return item.id !== e.target.id;
      }),
    });
  };

  render() {
    const groceryList = this.state.groceryList.map((item, index) => {
      console.log(item.id, item.name, item.description);
      return (
        <Grocery
          key={item.id}
          handleDeleteClick={this.handleDeleteClick}
          name={item.name}
          id={item.id}
          description={item.description}
        ></Grocery>
      );
    });
    return (
      <div>
        <h1>Grocery Items</h1>
        <form className='formClass'>
          <label>Name: </label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleOnChange}
          ></input>
          <br />
          <label>Description: </label>
          <input
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.handleOnChange}
          ></input>
          <br />
          <input
            type='submit'
            onClick={this.handleAddClick}
            value='ADD'
          ></input>
        </form>
        <br />
        <br />
        {groceryList}
      </div>
    );
  }
}

export default GroceryList;
