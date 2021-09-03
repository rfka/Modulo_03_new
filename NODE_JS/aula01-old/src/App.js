import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default function App(){
    return <h1>Página do APP</h1>
  }
  
  export function Imagem(props){
    return( 
      <>
        <img src={props.img} alt="imagem" width="100"/>
      </>
  )}
  
  export function Legenda(props){
    return( 
      <>
        <p>{props.legenda}</p>
      </>
  )}
  
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//       <Imagem img="https://i.pinimg.com/originals/b7/45/c1/b745c139d640faef008b412befdc37fa.png" />
//       <Legenda legenda="Homer Simpson" />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );