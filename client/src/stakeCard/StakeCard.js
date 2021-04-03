import './StakeCard.css';
import React from 'react';

function StakeCard(props) {
  console.log({props});
  return (
    <div className="StakeCard">
        <div class="flex-row" style={{justifyContent: "space-around"}}>
        <span className={props.plan < 3? "badge-purple" : "badge-blue"}>Plan {props.plan}</span>
        </div>
        <div class="flex-row" style={{justifyContent: "space-between", padding: "16px 16px 0 16px"}}>
            <p class="bg-txt" style={{margin: 0}}>{props.amount}</p>
            <p class="bg-txt" style={{margin: 0}}>{props.profit}</p>
        </div>
        <div class="flex-row" style={{justifyContent: "space-between", padding: "0 16px 16px 16px"}}>
            <p class="sm-txt">BNB</p>
            <p class="sm-txt">BNB</p>
        </div>

        <div className="flex-row" style={{justifyContent: 'space-around', textAlign: 'center'}}>
        Profit can be claimed at <br></br>{props.plan < 3? "Any Time" : new Date(props.finish).toLocaleDateString()}
        </div>
    </div>
  );
}

export default StakeCard;