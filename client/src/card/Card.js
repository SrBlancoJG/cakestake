import './Card.css';
import React, { useState, useEffect, useContext } from 'react'
import ConnectContext from '../ConnectContext';
export default function Card (props){
    const connectContext = useContext(ConnectContext);
    const [quantity, setQuantity] = useState(0);
    const [percent, setPercent] = useState(0);
    const [inputQuantity, setInputQuantity] = useState(0);
    const [profit, setProfit] = useState(0);

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
                alert(`${data} BNB have been succesfuly deposited!`);
            }catch(error){
                console.log({error});
                alert('The transaction have failed. Your funds haven\'t been staked. Please try again later');
            }
        }
        if(quantity !== 0){
            fetchData();
        }
    },[quantity]);

    useEffect(() => {
        async function fetchData(plan){
            console.log({connectContext});
            const response = await connectContext.contract.methods.getPercent(plan).call();
            console.log({plan, response});
            setPercent(response);
        }
        if(connectContext !== null) 
                fetchData(props.planId);
    },[connectContext])

    useEffect(() => {
        async function fetchData(plan){

            const response = await connectContext.contract.methods.getResult(plan, connectContext.web3.utils.toWei(inputQuantity, 'ether')).call();
            console.log({inputQuantity, response});
            setProfit(Number(connectContext.web3.utils.fromWei(response[1], 'ether')));
        }
        if(connectContext !== null && inputQuantity !== "")
            fetchData(props.planId)
    }, [inputQuantity])
    return (
        <div className={`Card ${props.planId === 2? 'thick': ''}`}>
            <div className="plan">
                <p>Plan {props.planId}</p>
            </div>

            <div className="flex-row">
                <div className="flex-col w-50">
                    <p className="sm-txt">Daily Profit</p>
                    <p className="bg-txt">{(percent/props.days).toFixed(2)}%</p>
                </div>

                <div className="flex-col w-50">
                    <p className="sm-txt">Total Return</p>
                    <p className="bg-txt">{percent}%</p>
                </div>
            </div>

            <div className="flex-row">
                <div className="flex-col w-50">
                    <p className="sm-txt">Withdraw time</p>
                    <p className="bg-txt" style={{fontSize: 25, marginTop: 10}}>{props.planId < 3? 'Any Time': props.days}</p>
                </div>

                <div className="flex-col w-50">
                    <p className="sm-txt">Days</p>
                    <p className="bg-txt">{props.days}</p>
                </div>
            </div>
            <form onSubmit={e => {
                e.preventDefault();
                setQuantity(inputQuantity)
            }}>
                <div className="flex-row">
                    <div className="flex-col w-50">
                        <p className="sm-txt">Enter Amount</p>
                        <input type="text" 
                        value={inputQuantity}
                        onChange={ e => {setInputQuantity(e.target.value.replace(',', '.'));}}
                        className="bg-txt" 
                        disabled={connectContext === null}
                        placeholder="0.0"></input>
                    </div>

                    <div className="flex-col w-50">
                        <p className="sm-txt">In {props.days} days you will get</p>
                        <p className="bg-txt" style={{fontSize: 35, marginTop: 10}}>{profit.toFixed(2)}</p>
                    </div>
                </div>

                <button type="submit" className="cta-fw" disabled={connectContext === null}>STAKE BNB</button>
            </form>
        </div>
    );
}