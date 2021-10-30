import React, { useState } from "react";
import estilos from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  //defino estado local para ir guardando lo que escriba el 
  //usuario en la barra de búsqueda
  const [city, setCity] = useState("");
  //defino una función que afectará a mi estado
  //para pasarle el onChange del input
  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }

  return (
    <div className = {estilos.contenedor} >    
    <form onSubmit={(e) => {
      e.preventDefault(); //para q no refresque la pagina y perder los estados
      //cuando haga el submit ejecutaré la función onSearch 
      //con mi estado city es decir, lo que sea que haya escrito
      //el usuario.
      onSearch(city);
      setCity("") 
      // esto es para luego de ingresar el dato, limpie el input
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>handleInputChange(e)}
      />
      <input className = {estilos.search}type="submit" value="Agregar" /> 
      {/* por aca entra el evento onSubmit */}
    </form>
    </div>
  );
}