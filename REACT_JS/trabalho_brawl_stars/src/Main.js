import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Main.css';

export default function Main() {

    const [brawlers, setBrawlers] = useState([
        {
            "brawlerId": 1,
            "nomeBrawler": "Griff",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Griff.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Griff",
            "raridadeBrawler": "Cromático"
        },
        {
            "brawlerId": 2,
            "nomeBrawler": "Edgar",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Edgar.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Edgar",
            "raridadeBrawler": "Épico"
        },
        {
            "brawlerId": 3,
            "nomeBrawler": "8-Bit",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/8-Bit.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/8-Bit",
            "raridadeBrawler": "Caminho_dos_Troféus"
        },
        {
            "brawlerId": 4,
            "nomeBrawler": "Tick",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Tick.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Tick",
            "raridadeBrawler": "Caminho_dos_Troféus"
        },
        {
            "brawlerId": 5,
            "nomeBrawler": "Rosa",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Rosa.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Rosa",
            "raridadeBrawler": "Raro"
        },
        {
            "brawlerId": 6,
            "nomeBrawler": "Carl",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Carl.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Carl",
            "raridadeBrawler": "Super_Raro"
        },
        {
            "brawlerId": 7,
            "nomeBrawler": "Tara",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Tara.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Tara",
            "raridadeBrawler": "Mistico"
        },
        {
            "brawlerId": 8,
            "nomeBrawler": "Dynamike",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Dynamike.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Dynamike",
            "raridadeBrawler": "Super_Raro"
        },
        {
            "brawlerId": 9,
            "nomeBrawler": "Colt",
            "imagemUrlBrawler": "https://cdn.brawlify.com/brawler/Colt.png",
            "detalhesBrawler": "https://brawlify.com/brawlers/detail/Colt",
            "raridadeBrawler": "Caminho_dos_Troféus"
        }
          
    
      ]);
      const [titulo, setTitulo] = ('Brawler');
      const [brawlerId, setBrawlerId] = useState('');
      const [nomeBrawler, setNomeBrawler] = useState('');
      const [imagemUrlBrawler, setImagemUrlBrawler] = useState('');
      const [detalhesBrauler, setDetalhesBrauler] = useState('');
      const [raridadeBrawler, setRaridadeBrawler] = useState('');
      let url = null;
    
      return(
          <>
            <h1>Brawler's</h1>
            <div className='fixo'>
                <p className='legenda'>Raridade</p>
                <div className='legenda Cromático'>Cromático</div>
                <div className='legenda Épico'>Épico</div>
                <div className='legenda Caminho_dos_Troféus'>Caminho dos Troféus</div>
                <div className='legenda Raro'>Raro</div>
                <div className='legenda Mistico'>Mistico</div>
                <div className='legenda Super_Raro'>Super Raro</div>
            </div>
            <article id='jogos'>
                <div className='conteudo-jogos'>
                    <ul>
                        {brawlers.map((brawler) =>(
                            <li key={brawler.id}>
                                <p className='oculto'>{url=`https://brawlify.com/brawlers/detail/${brawler.nomeBrawler}`}</p>
                                <a className={brawler.raridadeBrawler} href={url} target="_blank"><img src={brawler.imagemUrlBrawler} alt={brawler.nomeBrawler} /></a>
                                <h3>{brawler.nomeBrawler}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>

            <article id='incluir'>

                <img src='https://aquitemplacas.com.br/img/produtos/g/409-em-manutencao.jpg' alt='Em Manutenção!!' />

            </article>
          </>
      )
    
    }
