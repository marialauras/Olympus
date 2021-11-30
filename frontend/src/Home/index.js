import React, { useState, useHistory } from 'react';
import Navbar from '../components/Navbar';
import './style.css';

import Judo from '../assets/images/judo.png'

function Home() {
    return (
        <main id="home-page">
            <Navbar/>
            <img src={Judo}/>
           <section>
               <h1>Quadro de Medalhas</h1>
           </section>
        </main>
    );
}

export default Home;