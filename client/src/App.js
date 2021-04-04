import React, { useState } from "react";
import Loader from './loader/Loader';
import Header from './header/Header';
import Hero from './hero/Hero';
import Cards from './cards/Cards';
import Referr from './referr/Referr';
import Stake from './stake/Stake';
import Footer from './footer/Footer';
import {ConnectContextProvider} from './ConnectContext'
import "./App.css";

export default function App(){
  const [state, setState] = useState(null);
  const handleState = (newState) => {
    setState(newState);
  };
  return(
    <ConnectContextProvider value={state}>
    <Loader/>
    <Header onConnectionChange={handleState}/>
    <div className="container">
      <Hero />
      <Cards />
      <Referr />
      <Stake/>
      <Footer />
    </div>
    </ConnectContextProvider>
  );
}

  

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

