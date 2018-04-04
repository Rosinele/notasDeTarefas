import React, { Component } from 'react';
import Estorias from './Estorias'
import EstoriaForm from './EstoriaForm';

class Taskboard extends Component {
    constructor(){
        super();
        this.state = {
            estoria: [{
                id:1,
                titulo: 'Contratar Seguro',
                descricao:'Como usuario gostarias de cntranntratar ...',
                pontos:10,
            }]
        }
    }
    render() {
        const estorias = this._getEstorias();
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Estórias</h1>
                    <h3>{estorias.length} estórias</h3>
                    {estorias}  
                             
                </div>
               
            </div>
            
        )
    }
    _adicionarEstoria(titulo, pontos, descricao){
        const estoria = {
            titulo,
            descricao,
            pontos,
            id: this.state.estorias.length + 1
        }
        this.setState({
            estorias: this.state.estorias.concat([estoria])
        })
    }
    _getEstorias() {
        return this.state.estorias.map((estoria) => {

        })
        const estorias = [
            {
                id: 1,
                titulo: 'Contratar Seguro',
                descricao: 'Como usuario...',
                pontos: 10
            },
            {
                id: 1,
                titulo: 'Contratar Seguro',
                descricao: 'Como usuario...',
                pontos: 10
            }
        ];
        return estorias.map(estoria =>
            <Estorias
                titulo={estoria.titulo} descricao={estoria.descricao}
                pontos={estoria.pontos} key={estoria.id} />);
    }
    _getTitulo(totalDeEstorias) {
        if (totalDeEstorias === 0) {
            return "Backlog vazio";
        } else if (totalDeEstorias === 1) {
            return "1 estória";
        } else {
            return '${totalDeEstorias} estórias';
        }
    }
}

export default Taskboard;