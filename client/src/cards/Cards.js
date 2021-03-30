import './Cards.css';
import Card from '../card/Card';
import React  from 'react';

function Cards() {
  return (
    <div className="Cards">
      <div class="flex-row">
        <div class="flex-col"><Card planId={0} days={14}/></div>
        <div class="flex-col"><Card planId={1} days={21}/></div>
        <div class="flex-col"><Card planId={2} days={28}/></div>
      </div>      

      <div class="flex-row">
        <div class="flex-col" style={{marginTop: 25}}><Card planId={3} days={14}/></div>
        <div class="flex-col" style={{marginTop: 25}}><Card planId={4} days={21}/></div>
        <div class="flex-col" style={{marginTop: 25}}><Card planId={5} days={28}/></div>
      </div>
    </div>
  );
}

export default Cards;