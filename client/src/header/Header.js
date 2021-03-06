import React, { Component, useState } from "react";
import bnb_logo from '../bnb_logo.png';
import "./Header.css";
import WalletButton from '../async/wallet/WalletButton'

class Header extends Component {
  handleState = (state) => {
    this.props.onConnectionChange(state);
  };

  render(){
    if (document.getElementById('web3-load-warning')){
        return (<div></div>);
    }
    else{
    return (
    <div className="Header">
      <header className="Header-header">
        <div className="container">
          <a href="/" id="logo" className="flex-row txt-decoration-none">
            <img src={bnb_logo} style={{marginTop: 10, marginBottom: 10}}></img>
            <p className="bg-txt"><span>BNB</span>Factory</p>
          </a>
          <WalletButton onStateChange={this.handleState}></WalletButton>

          <div style={{width: "40%"}}></div>
          <div id="header-buttons" className="flex-row">
            <div className="cta"><a target={'_blank'} href={'https://t.me/bnbfactory'}>Telegram</a></div>
            <div className="cta"><a href={'/changelog'}>Changelog</a></div>
          </div>
          
        </div>
      </header>
    </div>
    
  );
  }
}
}


export default Header;
