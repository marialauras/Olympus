import React, { useState, useHistory } from 'react';
import './style.css';

function Edit() {
    const [ nome, setNome ] = useState('');
    const [ abreviacao, setAbreviacao ] = useState('');
    const [ nomeOficial, setNomeOficial ] = useState('');
    const [ continente, setContinente ] = useState('');

    function handleNome(e) {
        e.preventDefault();
        setNome(e.target.value);
    }

    function handleAbreviacao(e) {
        e.preventDefault();
        setAbreviacao(e.target.value);
    }

    function handleNomeOficial(e) {
        e.preventDefault();
        setNomeOficial(e.target.value);
    }

    function handleContinente(e) {
        e.preventDefault();
        setContinente(e.target.value);
    }


    function handleSubmit(e) {}

    return (
        <div id="edit-page">
            <main>
                <form className="edit-form">
                    <fieldset>
                        <legend>Editar País</legend>
                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome"
                                type="nome"
                                placeholder="..."
                                value={nome}
                                onChange={handleNome}
                                required={true}
                                className={''}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="nome-oficial">Nome Oficial</label>
                            <input 
                                id="nome-oficial"
                                type="nome-oficial"
                                placeholder="..."
                                value={nomeOficial}
                                onChange={handleNomeOficial}
                                required={true}
                                className={''}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="abreviacao">Abreviação</label>
                            <input 
                                id="abreviacao"
                                type="abreviacao"
                                placeholder="..."
                                value={abreviacao}
                                onChange={handleAbreviacao}
                                required={true}
                                className={''}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="continente">Continente</label>
                            <input 
                                id="continente"
                                type="continente"
                                placeholder="..."
                                value={continente}
                                onChange={handleContinente}
                                required={true}
                                className={''}
                            />
                        </div>
                        
                    </fieldset>

                    <button className="confirm-button" type="submit" onClick={e => handleSubmit(e)}>
                        Editar
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Edit;