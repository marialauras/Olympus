import React, { useState, useHistory } from 'react';
import Navbar from '../components/Navbar';
import './style.css';
import api from '../../services/api';

//import Judo from '../assets/images/judo.png'

function Home() {
    const [pais, setPais] = useState([]);

    function loadAllCountries(){
        api.get('/pais')
        .then(response => {
            setPais(response.data);
        })
        .catch(err => console.log(err))
    }

    function loadByContinent(){
        api.get('/join')
        .then(response => {
            setPais(response.data);
        })
        .catch(err => console.log(err))
    }

    function loadRepublics(){
        api.get('/like')
        .then(response => {
            setPais(response.data);
        })
        .catch(err => console.log(err))
    }

    function deleteCountry(){
        api.get('/delete')
        .then(response => {
            // Outra coisa
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAllCountries();
    }, []);

    return (
        <main id="home-page">
            <Navbar/>
            <div className="input-block">
                <label htmlFor="pesquisa">Digite abreviação ou continente</label>
                <input 
                    id="pesquisa"
                    type="pesquisa"
                    placeholder="..."
                    required={true}
                    className={''}
                />
                <button className="confirm-button" type="submit" onClick={loadByContinent}>
                    Pesquisar País por Continente
                </button>
                <button className="confirm-button" type="submit" onClick={loadRepublics}>
                    Pesquisar Países com República 
                </button>
                <button className="confirm-button" type="submit" onClick={loadAllCountries}>
                    Mostrar todos os países
                </button>
                <button className="confirm-button" type="submit" onClick={deleteCountry}>
                    Deleta país
                </button>
            </div>
           
           <section>
               <h1>Quadro de Medalhas</h1>
               {pais.map(p => (
                    <div class="big-box">
                        <div class="medium-box">
                            <div class="small-box">
                                <div class="text-box">
                                    <p>{p.nome}</p>
                                </div>
                            </div>
                        </div>
                </div>
               ))}
           </section>
        </main>
    );
}

export default Home;