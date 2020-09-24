import React from 'react'




export const Home = () =>{
    return(
        <div style={{marginTop:"10%", position:"absolute"}}>
           <div style={{display:"flex", direction:"row"}}>
                <div style={{margin: "2% 10%", width:"30%"}}>
                <h1>Buy/Sell Crypto Instantly</h1>
                    Available in 162 countries, ZebPay has served over
                    3 million users since our founding in 2014, processing $3 billion in transactions. 
                    Buy and sell Bitcoin, Ether, and other cryptocurrencies
                    instantly on one of the world’s most secure trading platforms. 
                    Available on web, iOS, and Android. 
                </div>
                <div>
                    <img src="https://ml2uyflrktha.i.optimole.com/9INU2Qs-1_-JD3ZH/w:400/h:395/q:90/https://zebpay.com/wp-content/uploads/elementor/thumbs/3-billion-hero-ovjf6lrvxr25dnhepwyaosqdyaodyxr2yvin4l17xq.png"/>
                </div>
            </div>
            <div style={{display:"flex", direction:"row"}}>
                <div style={{margin: "2% 10%", width:"30%"}}> 
                    <img src="https://ml2uyflrktha.i.optimole.com/9INU2Qs-t59YrGDO/w:400/h:459/q:90/https://zebpay.com/wp-content/uploads/elementor/thumbs/app-trade-osdw0rr1h2ggr9eabrz4xind8mbz9sr0q7oqa3rmjy.png"/>
                </div>
                <div style={{marginTop:"4%"}}>
                    <h1>Barrier Free</h1>
                    <ul>
                        <li>Trade Across 6 EUR-Crypto & 5 Crypto-Crypto Pairs</li>
                        <li>Zero Deposit Fees (FIAT & Crypto)</li>
                        <li> Zero Withdrawal Fees (FIAT)</li>
                    </ul>
                </div>
                
            </div>
        </div>
    ) 
}