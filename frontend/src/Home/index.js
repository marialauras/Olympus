import React, { useState, useHistory } from 'react';
import Navbar from '../components/Navbar';
import './style.css';
import api from '../../services/api';

import Judo from '../assets/images/judo.png'

function Home() {
    return (
        <main id="home-page">
            <Navbar/>
            <img src={Judo}/>
           <section>
               <h1>Quadro de Medalhas</h1>
                <div class="big-box">
                    <div class="medium-box">
                        <div class="small-box">
                            <div class="text-box">
                                <p>Brasil</p>
                            </div>
                        </div>
                    </div>
               </div>

               <div class="big-box">
                    <div class="medium-box">
                        <div class="small-box">
                            <div class="text-box">
                                <p>EUA</p>
                            </div>
                        </div>
                    </div>
               </div>

               <div class="big-box">
                    <div class="medium-box">
                        <div class="small-box">
                            <div class="text-box">
                                <p>Colombia</p>
                            </div>
                        </div>
                    </div>
               </div>
           </section>
        </main>
    );
}

export default Home;