import './StakeCard.css';
import React from 'react';

function StakeCard(props) {
  let today = new Date().getSeconds();
  let percent = 0;
  if(today > props.finish)
    percent = 100;
  else
    percent = (1 - ((props.finish - today)/props.finish))*100;
  return (
    <div className="StakeCard">
        <div class="flex-row" style={{justifyContent: "space-between", padding: "0 16px"}}>
            <p class="bg-txt">{props.amount}</p>
            <p class="bg-txt">{props.profit}</p>
        </div>
        <div class="flex-row" style={{justifyContent: "space-between", padding: "0 16px"}}>
            <p class="sm-txt">BNB</p>
            <p class="sm-txt">BNB</p>
        </div>

        <div class="progress">
            <div class="completed sm-txt">{percent}%</div>
        </div>
    </div>
  );
}

export default StakeCard;