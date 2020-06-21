import React from 'react';
import './Grocery.css';

function Grocery(props) {
  const { id, name, description } = props;

  const handleClick = () => {
    document.getElementById('count').value++;
  };

  return (
    <div className='content'>
      <div className='inc button' onClick={handleClick}>
        +
      </div>
      <div className='dec button' onClick={handleClick}>
        -
      </div>
      <input type='text' id='count' maxLength='3'></input>
      <label className='item' title={description}>
        {name}
      </label>
      <button className='delete' id={id} onClick={props.handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

export default Grocery;
