import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Data = createContext();
export default function Context({ children }) {
  const [bitcoin, setBitcoin] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin");
      setBitcoin(res.data)
    }
    fetchdata();
  },[]);
  return (
  <Data.Provider value={{bitcoin}}>
    {children}
    </Data.Provider>);
}
