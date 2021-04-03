import './Stake.css';
import StakeCard from '../stakeCard/StakeCard'
import React, { useState, useEffect, useContext } from 'react';
import ConnectContext from '../ConnectContext';

function Stake() {
  const connectContext = useContext(ConnectContext);
  const [stakes, setStakes] = useState(<div></div>);

  useEffect(() => {
    async function fecthData(){
      const toBNB = (wei) => {return Number(connectContext.web3.utils.fromWei(wei, 'ether')).toFixed(2);}
      let arrayOfStakes = [];
      const numberOfDeposits = Number(await connectContext.contract.methods.getUserAmountOfDeposits(connectContext.accounts[0]).call());
      for(let i = 0; i < numberOfDeposits; i++){
        let stakeResponse = await connectContext.contract.methods.getUserDepositInfo(connectContext.accounts[0], i).call();
        arrayOfStakes.push({
          plan: Number(stakeResponse[0]),
          percent: Number(stakeResponse[1]),
          amount: Number(toBNB(stakeResponse[2])),
          profit: Number(toBNB(stakeResponse[3])),
          start: new Date(Number(stakeResponse[4])*1000),
          finish: new Date(Number(stakeResponse[5])*1000)
        });
      }
      const listOfStakesHtml = arrayOfStakes.map((stake) => 
          <StakeCard key={stake.start.getSeconds()} plan={stake.plan} amount={stake.amount} profit={stake.profit} start={stake.start} finish={stake.finish}/>
      );
      setStakes(listOfStakesHtml);
    };
    if(connectContext !== null)
      fecthData();
  }, [connectContext])
  return (
    <div className="Stake">
        <h2 class="bg-txt">YOUR STAKE</h2>

        <div class="flex-row" style={{justifyContent: "flex-start", flexWrap: "wrap"}}>
            {stakes}
        </div>
    </div>
  );
}

export default Stake;