import React, {Component} from 'react';

class Formulario extends Component {


    brandRef = React.createRef();
    yearRef = React.createRef();
    planBasic = React.createRef();
    planComplete = React.createRef();


    quoteSafe = (event) => {
        event.preventDefault();

        const plan = this.planBasic.current.checked ? 'basico' : 'completo'

        const infoAuto = {
            marca: this.brandRef.current.value, 
            year: this.yearRef.current.value,
            plan: plan
        }

        this.props.cotizarSeguro(infoAuto);

        // form reset
        event.currentTarget.reset()
    }


    render () {
        return (
            <form className="cotizar-auto" onSubmit={this.quoteSafe}>
            <div className="campo">
                <label>Marca</label>
                <select name="marca" ref={this.brandRef}>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>

            <div className="campo">
                <label>Año</label>
                <select name="year" ref={this.yearRef}>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                </select>
            </div>
            <div className="campo">
                <label>Plan:</label>
                <input type="radio" ref={this.planBasic} name="plan" value="basico"/> Básico
                <input type="radio" ref={this.planComplete} name="plan" value="completo"/> Completo
            </div>

            <button type="submit" className="boton">Cotizar</button>
        </form>
        )
    }
}

export default Formulario;