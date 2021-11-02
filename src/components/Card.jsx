import React from 'react';
import estilos from './Card.module.css';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className = {estilos.contenedor}>
      <button className= {estilos.btn} onClick = {onClose}>X</button>
      <div><h4>{name}</h4></div>      
      <div><h6>Min</h6></div>
      <div><p>{min}</p></div> 
      <div><h6>Max</h6></div>    
      <div><p>{max}</p></div>
      
      <img src={ `http://openweathermap.org/img/wn/${img}@2x.png` } />
    </div> 
    );
};
