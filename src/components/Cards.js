import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Out Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/brandon.jpg'
              text='Matthew Brandon Dani - 00000036391'
              label='Programmer/Leader'
            />
            <CardItem
              src='images/adrian.jpg'
              text='Muhammad Adrian Maulana - 00000042312'
              label='Programmer'
            />
            <CardItem
              src='images/ahmad.jpg'
              text='Ahmad Buchori Wibowo - 00000034297'
              label='Programmer'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
