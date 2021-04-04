import './Cards.css';
import Card from '../card/Card';
import React  from 'react';

function Cards() {

  return (
    <div className="Cards">
      <h3 className="short-term-h3">Profits every day</h3>
      <div className="flex-row">
        {/* <div className="flex-col"><Card planId={0} days={14} /></div>
        <div className="flex-col"><Card planId={1} days={21} /></div> */}
        <div className="flex-col"><Card planId={2} days={28} /></div>
      </div>      
      <div className="flex-row" style={{justifyContent: 'center'}}><h3 className="long-term-h3">Long Term Plans</h3></div>
      <div className="flex-row">
        <div className="flex-col" style={{marginTop: 25}}><Card planId={3} days={14} /></div>
        <div className="flex-col" style={{marginTop: 25}}><Card planId={4} days={21} /></div>
        <div className="flex-col" style={{marginTop: 25}}><Card planId={5} days={28} /></div>
      </div>
    </div>
  );
}

export default Cards;