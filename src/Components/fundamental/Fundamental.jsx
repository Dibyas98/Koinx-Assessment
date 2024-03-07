import React, { useEffect, useState } from 'react'
import './fundamental.css'
import FundamentalCard from '../fundamentalcard/FundamentalCard'
import axios from 'axios'

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
        fetchData()
    },[])
    console.log(coin);
    return (
        <div className='fundamental'>
            <div className='fundamental-col'>
                <FundamentalCard tag={'USD'} detail={coin.bitcoin.usd}></FundamentalCard>
                <FundamentalCard tag={"usd_24h_change"} detail={coin.bitcoin.usd_24h_change}></FundamentalCard>
            </div>
            <div className='fundamental-col'>
                <FundamentalCard tag={'INR'} detail={coin.bitcoin.inr}></FundamentalCard>
                <FundamentalCard tag={ "inr_24h_change"} detail={coin.bitcoin.inr_24h_change}></FundamentalCard>
            </div>
        </div>
    )
}
