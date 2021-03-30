import React, { Component } from "react";
import cake from '../cake.webp';
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
            <img src={cake} ></img>
            <p class="bg-txt"><span>CAKE</span>Stake</p>
          </div>
          <WalletButton onStateChange={this.handleState}></WalletButton>

          <div style={{width: "25%"}}></div>

          <div id="cake-price" class="sm-txt"><span>1 BNB = </span>PRECIO</div>
          <div id="header-buttons" class="flex-row">
            <div class="cta">Support</div>
            <div class="cta">Telegram</div>
            <div class="cta">Audit</div>
            <div class="cta">Help</div>
            <div class="cta">Presentation</div>
          </div>
          
        </div>
      </header>
    </div>
    
  );
  }
}
}


export default Header;
