import React from 'react'
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core"


function Home() {
  
  const { address } = useAccount()
  return (
    <div>Home</div>
    //{connectors.map}
  )
}

export default Home