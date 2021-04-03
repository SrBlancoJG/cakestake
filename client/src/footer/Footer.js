import './Footer.css';
import React  from 'react';

function Footer() {
  return (
    <div className="Footer">
      <div className="flex-row">
        <div className="flex-col txt-left">
          <p className="sm-txt">Powered by</p>
          <a href={'https://www.binance.org/en/smartChain'} className="sm-txt">Binance Smart Chain</a>
        </div>

        <div className="flex-col txt-center">

        </div>

        <div className="flex-col txt-right">
          <p className="sm-txt">© 2021. All rights reserved.</p>
          <a href={'https://bnbstake.app'} className="sm-txt">https://bnbfactory.app</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;