import React from 'react';
import {  BrowserRouter, Router, Route, Routes  } from 'react-router-dom';



import Home from './Home/index';
import Login from './Login';

const RoutesOlympus = () => {
    return(
        <BrowserRouter>
             <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<Home/>} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesOlympus;