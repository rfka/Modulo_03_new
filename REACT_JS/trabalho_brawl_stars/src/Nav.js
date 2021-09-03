import React from 'react';
import './Nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    render(){
        return(
            <>
            <div className='tudo'>
                <div className='menu'>
                    <div className='links'>
                        <nav>
                            <ul>
                                <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                <li><AnchorLink href='#jogos' offset='170'>Jogos</AnchorLink></li>
                                <li><AnchorLink href='#incluir' offset='150'>Incluir</AnchorLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </>
        );
    }
}