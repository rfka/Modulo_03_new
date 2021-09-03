import React from 'react';
import './Header.css';


export default class Header extends React.Component {
    render(){
        return(
            <>
            <header>
                <div className='titulo'>Game Mobile Brawl Stars!!</div>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/CaryjOdYFa0?list=PLTBLax1DE162xe0IH3wBZFSUkigtAVk_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </header>
            </>
        );
    }
}