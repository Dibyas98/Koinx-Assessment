import React, { useContext, useEffect, useState } from 'react'
import './fundamental.css'
import FundamentalCard from '../fundamentalcard/FundamentalCard'
import axios from 'axios'
import { Data } from '../context/Context';

export default function Fundamental() {
    const [coin,setCoin] = useState({ bitcoin: {} }); // Provide initial value
    useEffect(() =>{
        async function fetchData(){
            try {
                const fdata =  await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD%2Cinr&include_24hr_change=true')
                setCoin(fdata.data)
            } catch (error) {
                console.log(error);
            }
        }
        // fetchData()
    },[])
    const {bitcoin} =useContext(Data)
    console.log(bitcoin);
    return (
        <div className='fundamental'>
            {Object.keys(bitcoin).length>0 ? 
            <>
            <div className='fundamental-col'>
                <FundamentalCard tag={'Bitcoin Price'} detail={`$${bitcoin.market_data.current_price.aed}`}></FundamentalCard>
                <FundamentalCard tag={"24 Low / 24 High"} detail={`$${bitcoin.market_data.low_24h.aed} / $${bitcoin.market_data.high_24h.aed}`}></FundamentalCard>
                <FundamentalCard tag={"7 day Low / 7day High"} detail={`$${bitcoin.market_data.low_24h.ars} / $${bitcoin.market_data.high_24h.ars}`}></FundamentalCard>
                <FundamentalCard tag={"Tranding volume"} detail={`$${bitcoin.market_data.high_24h.ars}`}></FundamentalCard>
                <FundamentalCard tag={"Market Cap Rank"} detail={`#${bitcoin.market_cap_rank}`}></FundamentalCard>
            </div>
            <div className='fundamental-col'>
                <FundamentalCard tag={'Market Cap'} detail={bitcoin.market_data.market_cap.aed}></FundamentalCard>
                <FundamentalCard tag={ "Market Cap Dominance"} detail={`38.066%`}></FundamentalCard>
                <FundamentalCard tag={ "Volume / Market Cap"} detail={bitcoin.market_data.market_cap_fdv_ratio}></FundamentalCard>
                <FundamentalCard tag={ "All Time High"} detail={`$ 69,044.77`}></FundamentalCard>
                <FundamentalCard tag={ "All Time Low"} detail={`$ 67.81`}></FundamentalCard>
            </div></>:<></>}
            
        </div>
    )
}
