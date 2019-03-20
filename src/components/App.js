import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './../helper';

class App extends Component {
  
  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (dataAuto) => {
    const {marca, plan, year} = dataAuto;
    let res = 2000;

    const diff = obtenerDiferenciaAnio(year);

    res -= ((diff * 3) * res) / 100;

    res = calcularMarca(marca) * res;

    let incremento = obtenerPlan(plan);

    res = parseFloat(incremento * res).toFixed(2);

    const auto = {
      marca: marca,
      plan: plan,
      year: year
    }
    this.setState({
      resultado: res,
      datos: auto
    })    
  }

  render() {
    return (
      <div className="contenedor">
        <Header
        title= 'Cotizador de seguro de auto'/>

        <div className="contenedor-formulario">
            <Formulario 
            cotizarSeguro={this.cotizarSeguro}/>

            <Resumen 
              datos={this.state.datos}
              resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
