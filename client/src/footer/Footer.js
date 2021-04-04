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
        <p className="sm-txt">The contract is a fork of the popular <a href={'https://bnbstake.app/'} target={'_blank'} className="sm-txt">BNBStake</a> contract that has been audited by hazecrypto.<br></br> The audit report can be read <a href={'https://hazecrypto.net/wp-content/uploads/2021/03/HazeSecurity_BNBStake.pdf'} target={'_blank'} className="sm-txt">here</a></p>
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