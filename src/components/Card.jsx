import React from 'react';
import estilos from './Card.module.css';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className = {estilos.contenedor}>
      <button className= {estilos.btn} onClick = {onClose}>X</button>
      <h4>{name}</h4>      
      <h6>Min</h6>
      <p>{min}</p>     
      <h6>Max</h6>
      <p>{max}</p>
      
      <img src={ `http://openweathermap.org/img/wn/${img}@2x.png` } />
    </div> 
    );
};
