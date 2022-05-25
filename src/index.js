import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Inicio from './pages/inicio/Inicio';
import Juegayaprende from './pages/juegayaprende/Juegayaprende';
import Kitfem from './pages/kitfem/Kitfem';
import Oportunidades from './pages/oportunidades/Oportunidades';
import Asociados from './pages/redes/asociados/Asociados';
import Lineas from './pages/redes/lineas/Lineas';
import Error404 from './pages/error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Nombres temporales a las rutas */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/inicio' element={<Inicio/>}></Route>
      <Route path='/juega-aprende' element={<Juegayaprende/>}></Route>
      <Route path='/kit-fem' element={<Kitfem/>}></Route>
      <Route path='/oportunidades' element={<Oportunidades/>}></Route>
      <Route path='/asociados' element={<Asociados/>}></Route>
      <Route path='/lineas' element={<Lineas/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/home' element={<Navigate replace to={'/'}/>}></Route>  
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

