import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ThetaWalletConnect from "@thetalabs/theta-wallet-connect";
export const VlogEraTCContext = createContext()

export const VlogEraTCProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()



    // Cleanup the event listener when the component unmounts
    return () => {
         // Add an event listener for the accountsChanged event
    window.ethereum.on('accountsChanged', checkIfWalletIsConnected)
    }
  }, [])

  /**
   * Checks if there is an active wallet connection
   */
  const checkIfWalletIsConnected = async () => {
   
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
    
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
     
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }

  /**
   * Initiates MetaMask wallet connection
   */
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      // Wait for a confirmation that the wallet is connected
      await new Promise((resolve, reject) => {
        const checkInterval = setInterval(async () => {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          if (accounts.length > 0) {
            clearInterval(checkInterval)
            resolve()
          }
        }, 1000)
      })

      setCurrentAccount(addressArray[0])
      setAppStatus('connected')
      router.push('/')
    } catch (err) {
      setAppStatus('error')
    }
  }

  return (
    <VlogEraTCContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet
      }}
    >
      {children}
    </VlogEraTCContext.Provider>
  )
}
