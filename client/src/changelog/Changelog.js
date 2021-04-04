import React from 'react';
import './Changelog.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Changelog(){
    return(<div>
        <Header></Header>
        <div className="container" >
            <div style={{minHeight: "80vh"}}>
            <div id="changelist">
                <a href="#update-1" style={{display: 'none'}}>Update 1</a>
            </div>
            <div className="spacer-50"></div>
            <div id="update-1" className="update">
                <h2>04/04/2021: Creation of the Changelog !!</h2>
                <ul>
                    <li>We have added the Changelog page, were all you people will be able to see all the changes we are making to this project.</li>

                    <li>We have also <strong>removed from the website the first two plans (0 and 1)</strong> because we want our stakers to get the most profitable plans.
                    <br></br>
                    These plans were there because the contract we forked had them, but we have seen that they are not as profitable as the others.
                    <br></br>
                    To the people who already staked in them <strong>DON'T WORRY.</strong> The plans are only removed from the site, <strong>not from the contract</strong>, so you can still withdraw your profits.</li>
                    
                    <li>We are also updating the footer to make clear that (for the moment) <strong>our contract is not audited, but the contract we are forking is.</strong></li>
                    
                    <li>Also some small typos have been fixed.</li>
                </ul>
            </div>
            </div>
        <Footer></Footer>
        </div>
        
    </div>);
}