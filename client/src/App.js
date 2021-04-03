import React, { useEffect, useState } from "react";
import Loader from './loader/Loader';
import Header from './header/Header';
import Hero from './hero/Hero';
import Cards from './cards/Cards';
import Referr from './referr/Referr';
import Stake from './stake/Stake';
import Footer from './footer/Footer';
import footerImg from './footer.png';
import {ConnectContextProvider} from './ConnectContext'
import "./App.css";
import axios from 'axios';
import cheerio from 'cheerio'; 

export default function App(){
  const [state, setState] = useState(null);
  const [bnbPrice, setBnbPrice] = useState(0);
  const handleState = (newState) => {
    setState(newState);
  };
  useEffect(() => {
    async function fetchData(){
      const pageContent = await axios.get('https://bscscan.com/');
      const $ = cheerio.load(pageContent.data);
      setBnbPrice($('a.text-size-1.text-link').text());
    };
    if(state !== null)
      fetchData();
  }, [state])
  return(
    <ConnectContextProvider value={state}>
    <Loader />
    <Header bnbPrice={bnbPrice} onConnectionChange={handleState}/>
    <div className="container">
      <Hero />
      <Cards />
      <Referr />
      <Stake/>
      <img src={footerImg} style={{display: 'block', margin: 'auto', marginTop: 25, width: '100%'}}></img>
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

