import React, {useState, useEffect} from 'react';
import getWeb3 from '../../getWeb3';
import BNBStake from "../../contracts/BNBStake.json"

async function connectToWallet() {
    try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = BNBStake.networks[networkId];
        const instance = new web3.eth.Contract(
          BNBStake.abi,
          deployedNetwork && deployedNetwork.address,
        );
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        return {
          web3: web3,
          accounts: accounts,
          contract: instance
        };
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
};

export default function WalletButton(props){
    const [walletAddress, setWalletAddress] = useState('Connect to Wallet');
    const [pressedButton, setPressedButton] = useState(0);
    const [connectState, setConnectState] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
            const response = await connectToWallet();
            setWalletAddress(response.accounts[0]);
            setConnectState(response);
            }catch(error) {
                console.log(error);
            }
        }
        if(pressedButton !== 0){
            fetchData();
        }
    }, [pressedButton]);

    useEffect(() => {
      props.onStateChange(connectState);
    }, [connectState])
    return(
        <form onSubmit={e => {
            e.preventDefault();
            setPressedButton(pressedButton + 1);
        }}>
        <button id="wallet" type="submit">{walletAddress}</button>
        </form>
    );
}