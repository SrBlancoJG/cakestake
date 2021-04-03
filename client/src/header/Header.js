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
        <div class="container">
          <div id="logo" class="flex-row">
            <img src={bnb_logo} style={{marginTop: 10, marginBottom: 10}}></img>
            <p class="bg-txt"><span>BNB</span>Factory</p>
          </div>
          <WalletButton onStateChange={this.handleState}></WalletButton>

          <div style={{width: "40%"}}></div>

          <div id="cake-price" class="sm-txt"><span>1 BNB = </span>{this.props.bnbPrice}</div>
          <div id="header-buttons" class="flex-row">
            <div class="cta"><a target={'_blank'} href={'https://t.me/bnbfactory'}>Telegram</a></div>
          </div>
          
        </div>
      </header>
    </div>
    
  );
  }
}
}


export default Header;
