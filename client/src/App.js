import React, { Component } from "react";
import "./App.css";

class App extends Component {

  

  // runExample = async () => {
  //   const { web3, accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   //await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   //const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   //this.setState({ storageValue: response });
  //   // MISION Convertir un ETH en cake
  // };

  render() {
    if (!this.state) {
      return <div id="web3-load-warning"></div>;
    }
  //   return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div class="container">
  //         <div id="logo" class="flex-row">
  //           <img src={cake} ></img>
  //           <p class="bg-txt"><span>CAKE</span>Stake</p>
  //         </div>
  //         <div id="wallet">{this.state.accounts[0]}</div>

  //         <div style={{width: "25%"}}></div>

  //         <div id="cake-price" class="sm-txt"><span>1 BNB = </span>${this.state.storageValue}</div>
  //         <div id="header-buttons" class="flex-row">
  //           <div class="cta">Support</div>
  //           <div class="cta">Telegram</div>
  //           <div class="cta">Audit</div>
  //           <div class="cta">Help</div>
  //           <div class="cta">Presentation</div>
  //         </div>
          
  //       </div>
  //     </header>
  //   </div>
    
  // );
  }
}

export default App;
