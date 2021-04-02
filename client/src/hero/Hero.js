import './Hero.css';
import bckImg from '../fondo-balance.jpg'
import React, { useState, useEffect, useContext } from 'react';
import ConnectContext from '../ConnectContext'

function Hero() {
    const connectContext = useContext(ConnectContext);
    const [totalBnbStaked, setTotalBnbStaked] = useState(0);
    const [totalContractBalance, setTotalContractBalance] = useState(0);

    useEffect(() => {
        async function fetchData(){
            console.log({connectContext});
            const toBNB = (wei) => {return Number(connectContext.web3.utils.fromWei(wei, 'ether')).toFixed(2);}
            const response1 = await connectContext.contract.methods.totalStaked().call();
            const response2 = await connectContext.contract.methods.getContractBalance().call();
            setTotalBnbStaked(toBNB(response1));
            setTotalContractBalance(toBNB(response2));
        }
        if(connectContext !== null)
            fetchData();
        
    },[connectContext])
  return (
    <div className="Hero">
        <div id="basic-info"  style={{backgroundImage: "url("+bckImg+")", backgroundSize: "200%", backgroundPosition: "center left"}}>
            <p>Total income: based on your tarrif plan (from 5% to 8% daily)</p>
            <p>Basic interest rate: +0.5% every 24 hours - only for new deposits</p>
            <p>Minimal deposit: 0.05 BNB</p>
            <p>Maximum deposit: 5 BNB</p>
            <p>Earnings every moment, withdraw any time (if you use capitalization of interest you can withdraw only after end of your deposit)</p>
        </div>
        
        <div id="balance">
            <div>
                <p class="d-flex flex-row">Total BNB Staked<div class="cta" style={{marginLeft: 5, alignItems: "center"}}>Contract</div></p>
                <h2>{totalBnbStaked}</h2>
            </div>

            <br></br>

            <div>
                <p class="d-flex flex-row">Total Contract Balance</p>
                <h2>{totalContractBalance}</h2>
            </div>
        </div>
    </div>
    
  );
}

export default Hero;
