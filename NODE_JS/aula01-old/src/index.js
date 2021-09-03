import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// export default function Home(){
//   return <h1>Hello World!!</h1>
// }

// export function Texto(props){
//   return <p>{props.texto}</p>
// }

// export function Botao(props){
//   const [botao, setBotao] = useState(0);

//   return(
//     <div>
//       <p>numero de clicks: {botao}</p>
//       <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
//     </div>
//   )
// }

// export function Paragrafos(){
//   return(
//     <div>
//       <Texto texto="esse é um simples texto na tela." texto2="outra frase"/>
//       <Texto texto="outro texto da linha de baixo"/>
//       <Texto texto="mais algum texto aqui"/>
//       <Texto texto="pra acabar essa ultima linha"/>
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Paragrafos />
    <Botao nome="Acumular" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);