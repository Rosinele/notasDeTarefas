import React, { Component } from 'react';
import Estorias from './Estorias'

class Taskboard extends Component {
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
    _getEstorias() {
        const estorias = [
            {
                id: 1,
                titulo: 'Contratar Seguro',
                descricao: 'Como usuario...',
                pontos: 10
            },

          
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