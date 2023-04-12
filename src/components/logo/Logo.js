import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import Brain from './brain.png'

function Logo() {
    return (
       <div className='ma4'>
         <Tilt className='Tilt'>
            <div className='Tilt-inner'>
                <img src={Brain} alt='Brain'></img>
            </div>
        </Tilt>
       </div>
    )
}

export default Logo;
