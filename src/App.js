import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards'; //Card o Cards?



export default function App() {
//defino mi estado local cities y su función seteadore setCities
  //el valor inicial de cities será un array vacío ([])
  const [cities, setCities] = useState([]);

  //defino mi variable apiKey
  const apiKey = "bce2b1e37cd170845db056019ace4b11"

  //defino la función onSearch
  function onSearch(ciudad) { 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
    //defino la función onClose
    //a partir del id recibido, elimina dicha cudad del array de ciudades del estado.
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id)); 
      // Sacamos las ciudades q fueron cerradas del arreglo
    }

  return (
    <div className="App">
      { /* Tu código acá: */ }

     <Nav onSearch={onSearch}/>
     <Cards cities = {cities} onClose = {onClose}/>
    </div>
  );
  
}