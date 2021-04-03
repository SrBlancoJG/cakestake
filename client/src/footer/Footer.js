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
          <p className="sm-txt">Audited by HazeCrypto</p>
          <a href={'https://hazecrypto.net/wp-content/uploads/2021/03/HazeSecurity_BNBStake.pdf'} className="sm-txt">Download Audit PDF Report</a>
        </div>

        <div className="flex-col txt-right">
          <p className="sm-txt">© 2021 by AV. All rights reserved.</p>
          <a href={'https://bnbstake.app'} className="sm-txt">https://bnbfactory.app</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;