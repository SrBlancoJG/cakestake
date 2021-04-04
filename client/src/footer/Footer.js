import './Footer.css';
import React  from 'react';
import footerImg from './footer.png'

function Footer() {
  return (
    <div className="Footer">
      <img src={footerImg} style={{display: 'block', margin: 'auto', marginTop: 25, width: '100%'}}></img>
      <div className="flex-row">
        <div className="flex-col txt-left">
          <p className="sm-txt">Powered by</p>
          <a href={'https://www.binance.org/en/smartChain'} target={'_blank'} className="sm-txt">Binance Smart Chain</a>
        </div>

        <div className="flex-col txt-center">
        <p className="sm-txt">We are currently working on auditing the project. It will be coming very soon.</p>
        </div>

        <div className="flex-col txt-right">
          <p className="sm-txt">© 2021. All rights reserved.</p>
          <a href={'https://bnbfactory.app'} target={'_blank'} className="sm-txt">https://bnbfactory.app</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;