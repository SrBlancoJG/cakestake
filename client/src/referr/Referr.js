import './Referr.css';
import bckImg from '../bg_morado.png';
import React, { useState, useEffect, useContext } from 'react';
import ConnectContext from '../ConnectContext';

function Referr() {
    const copyCodeToClipboard = () => {
        const el = document.querySelector('#referr-link').innerHTML;
        navigator.clipboard.writeText(el)
    }
    const connectContext = useContext(ConnectContext);
    const [withdrawable, setWithdrawable] = useState(0.0);
    const [staked, setStaked] = useState(0.0);
    const [referrerAddress, setReferrerAddress] = useState('');
    const [referralEarned, setReferralEarned] = useState(0.0);
    const [referralWithdrawn, setReferralWithdrwan] = useState(0.0);
    const [usersInvited, setUsersInvited] = useState(0);
    const [wantToWithdraw, setWantToWithdraw] = useState(0);


    useEffect(() => {
        async function fetchData(){
            const toBNB = (wei) => {return Number(connectContext.web3.utils.fromWei(wei, 'ether')).toFixed(3);}
            const response1 = await connectContext.contract.methods.getUserTotalDeposits(connectContext.accounts[0]).call();
            const response2 = await connectContext.contract.methods.getUserAvailable(connectContext.accounts[0]).call();
            const response3 = await connectContext.contract.methods.getUserReferralTotalBonus(connectContext.accounts[0]).call();
            const response4 = await connectContext.contract.methods.getUserReferralWithdrawn(connectContext.accounts[0]).call();
            const response5 = await connectContext.contract.methods.getUserDownlineCount(connectContext.accounts[0]).call();
            setStaked(toBNB(response1));
            setWithdrawable(toBNB(response2));
            setReferrerAddress(connectContext.accounts[0]);
            setReferralEarned(toBNB(response3));
            setReferralWithdrwan(toBNB(response4));
            setUsersInvited(Number(response5[0]) + Number(response5[1]) + Number(response5[2]));
        };
        if(connectContext !== null)
            fetchData();
        
    },[connectContext]);

    useEffect(() => {
            async function fetchData(){
                try{
                    const tx = await connectContext.contract.methods.withdraw()
                    .send({ 
                        from: connectContext.accounts[0],  
                    });
                    alert(`BNB have been succesfuly withdrawn!`);
                }catch(error){
                    console.log({error});
                    alert('We had an error sending your transaction. The funds haven\'t been deposited yet. Please try again later');
                }
            };
            if(connectContext !== null && wantToWithdraw !== 0){
                fetchData();
            }
    }, [wantToWithdraw]);
  return (
    <div className="Referr">
        <p className="sm-txt" style={{margin: 0, marginBottom: 15}}>
            1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily<br></br>
            2. Minimum deposit amount is 0.05 BNB and you can have multiple deposits<br></br>
            3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)
        </p>


        <div className="flex-row">
            <form id="staked" style={{backgroundImage: "url("+bckImg+")"}} onSubmit={e => {
                e.preventDefault();
                setWantToWithdraw(wantToWithdraw + 1);
            }}>
            <div>
                <p style={{marginBottom: 0, marginTop: 0}}>Total Staked BNB</p>
                <p className="bg-txt">{staked}</p>
                <p style={{marginBottom: 0, marginTop: 30}}>Available BNB for withdrawal</p>
                <p className="bg-txt">{withdrawable}</p>
                <button className="cta-fw" type="submit" style={{marginTop: 50}}>WITHDRAW BNB</button>
            </div>
            </form>

            <div id="referral">
                <div className="flex-col">
                    <p className="sm-txt" style={{margin: "0 0 16px 0"}}>Your Referral Link</p>
                    
                    <div className="flex-row">
                        <div id="referr-link" className="input">https://bnbfactory.app/?ref={referrerAddress}</div>
                        <button id="copy" onClick={() => copyCodeToClipboard()} className="cta"style={{marginRight: 15}}>Ctr+C</button>
                    </div>

                    <div className="flex-row" style={{marginTop: 25}}>
                        <div className="flex-col" style={{width: "33%", padding: 0}}>
                            <p className="sm-txt">Total Referral Earned</p>
                            <p className="bg-txt">{referralEarned}</p>
                            <p className="sm-txt">Invited Users by You</p>
                            <p className="bg-txt">{usersInvited}</p>
                        </div>

                        <div className="flex-col" style={{width: "33%", padding: 0}}>
                            <p className="sm-txt">Total Referral Withdrawn</p>
                            <p className="bg-txt">{referralWithdrawn}</p>
                        </div>

                        <div className="flex-col" style={{width: "33%", padding: 0}}>
                            <p className="sm-txt">Earn for promotion BNBstake</p>
                            <p className="sm-txt">You will receive:</p>
                            <br></br>
                            <p className="sm-txt">5% from each level 1 referral deposits</p>
                            <p className="sm-txt">2.5% from each level 2 referral deposits</p>
                            <p className="sm-txt">0.5% from each level 3 referral deposits</p>
                            <br></br>
                            <p className="sm-txt italic">Note! You need to have at least 1 deposit to start receive earnings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Referr;