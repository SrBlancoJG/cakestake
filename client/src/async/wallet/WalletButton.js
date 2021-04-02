import React, {useState, useEffect} from 'react';
import getWeb3 from '../../getWeb3';
import BNBFactory from "../../contracts/BNBFactory.json"

async function connectToWallet() {
    try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
  
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = BNBFactory.networks[networkId];
        const instance = new web3.eth.Contract(
          BNBFactory.abi,
          deployedNetwork && deployedNetwork.address,
        );
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        if(instance._address === null){
          alert('I think you are connected to the wrong network...');
          return null;
        }
        if(accounts.length === 0){
          alert('I think you dont have any account...');
          return null;
        }
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
            if(response !== null){
              setWalletAddress(response.accounts[0]);
              setConnectState(response);
            }
            }catch(error) {
                console.log(error);
            }
        }
        if(pressedButton !== 0){
            fetchData();
        }
    }, [pressedButton]);

    useEffect(() => {
      if(connectState !== null)
        props.onStateChange(connectState);
    }, [connectState])
    return(
        <form onSubmit={e => {
            e.preventDefault();
            setPressedButton(pressedButton + 1);
        }}>
        <button id="wallet" type="submit">{walletAddress.substring(0,4)}...{walletAddress.substring(walletAddress.length - 4,walletAddress.length)}</button>
        </form>
    );
}