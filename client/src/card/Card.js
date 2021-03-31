import './Card.css';
import React, { useState, useEffect, useContext } from 'react'
import ConnectContext from '../ConnectContext'
export default function Card (props){
    const connectContext = useContext(ConnectContext);
    const [quantity, setQuantity] = useState(0);
    const [percent, setPercent] = useState(0);
    const [inputQuantity, setInputQuantity] = useState(0);
    useEffect(() => {
        async function fetchData(){
            console.log({quantity});
            const url = new URL(window.location.href)
            var referrer = url.searchParams.get('ref')
            if(referrer === null)
                referrer = "0x0000000000000000000000000000000000000000"
            const data = quantity;
            try{
            const tx = await connectContext.contract.methods.invest(referrer, props.planId)
            .send({ 
                from: connectContext.accounts[0], 
                value: connectContext.web3.utils.toWei(data, 'ether') 
            });
            alert(`${data} BNB have been succesfuly deposited!`)
        }catch(error){
            console.log({error});
            alert('We had an error sending your transaction. Your funds haven\'t been sepnt. Please try again later')
        }
        }
        if(quantity !== 0)
            fetchData();
    },[quantity]);

    useEffect(() => {
        async function fetchData(plan){
            console.log({connectContext});
            const response = await connectContext.contract.methods.getPercent(plan).call();
            console.log({response});
            setPercent(response);
        }
        if(connectContext !== null)
            fetchData(props.planId);
    },[connectContext])
    return (
        <div className="Card">
            <div class="plan">
                <p>Plan {props.planId}</p>
            </div>

            <div class="flex-row">
                <div class="flex-col w-50">
                    <p class="sm-txt">Daily Profit</p>
                    <p class="bg-txt">{percent}%</p>
                </div>

                <div class="flex-col w-50">
                    <p class="sm-txt">Total Return</p>
                    <p class="bg-txt">{percent*props.days}%</p>
                </div>
            </div>

            <div class="flex-row">
                <div class="flex-col w-50">
                    <p class="sm-txt">Withdraw time</p>
                    <p class="bg-txt" style={{fontSize: 25, marginTop: 10}}>{props.planId < 3? 'Any Time': props.days}</p>
                </div>

                <div class="flex-col w-50">
                    <p class="sm-txt">Days</p>
                    <p class="bg-txt">{props.days}</p>
                </div>
            </div>
            <form onSubmit={e => {
                e.preventDefault();
                setQuantity(inputQuantity)
            }}>
                <div class="flex-row">
                    <div class="flex-col w-50">
                        <p class="sm-txt">Enter Amount</p>
                        <input type="text" 
                        value={inputQuantity}
                        onChange={ e => {setInputQuantity(e.target.value);}}
                        class="bg-txt" 
                        disabled={connectContext === null}
                        placeholder="0.0"></input>
                    </div>

                    <div class="flex-col w-50">
                        <p class="sm-txt">In {props.days} days you will get</p>
                        <p class="bg-txt" style={{fontSize: 35, marginTop: 10}}>{((percent/100)*props.days*inputQuantity).toFixed(2)}</p>
                    </div>
                </div>

                <button type="submit" className="cta-fw" disabled={connectContext === null}>STAKE CAKE</button>
            </form>
        </div>
    );
}