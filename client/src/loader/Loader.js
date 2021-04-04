import bnbLogo1 from '../bnb_logo_1.png';
import bnbLogo2 from '../bnb_logo_2.png';
import bnbLogo3 from '../bnb_logo_3.png';
import bnbLogo3_1 from '../bnb_logo_3_1.png';
import './Loader.css';
import React from 'react';

function StakeCard(props) {
    window.addEventListener('load', 
    ()=> {
        setTimeout(() => {
            let loader = document.querySelector('.Loader');
            loader.style.opacity = '0';
        }, 1750);
        
    });

    return (
        <div className="Loader">
            <div className="loader-logo">
                <img className="one" src={bnbLogo1}></img>
                <img className="two" src={bnbLogo2}></img>
                <img className="three" src={bnbLogo3}></img>
                <img className="three effect" src={bnbLogo3_1}></img>
            </div>
        </div>
    );
}

export default StakeCard;