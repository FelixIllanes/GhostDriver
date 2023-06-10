import { useState, useEffect } from "react"
import "./button_wallet.css"

export default function ConnectionButton(){


    const connectedState = ["Desconectado", "Conectado"]
    const textState = ["Conectar Wallet" , "Desconectar"]

    const[text, setText] = useState(textState[0])

    const[account, setAccount] = useState(null)
    const[connected, setConnected] = useState(connectedState[0])

    
    const connectWallet = () =>{
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                setAccount(result[0])
                setConnected(connectedState[1])
                setText(textState[1])

                const accountAndConection = {account: result[0], conectado: connectedState[1], texto: textState[1]};
                localStorage.setItem("Conectado", JSON.stringify(accountAndConection.conectado))
                localStorage.setItem("account", JSON.stringify(accountAndConection.account))
                localStorage.setItem("texto", JSON.stringify(accountAndConection.texto)) 
            })
            .catch(error => {
                setText(error.message)
            })
        }else{
            setText("Necesitas tener metamask instalado")
        }
    }


    console.log(account)
    useEffect(()=>{

        const conectado = localStorage.getItem('Conectado')
        const accounted = localStorage.getItem('account')
        const texto = localStorage.getItem('texto')

        setConnected(JSON.parse(conectado))
        setAccount(JSON.parse(accounted))
        setText(JSON.parse(texto))
    },[])

 
    const disconnectWallet = () =>{

        localStorage.removeItem("account")

        setAccount(null)
        setText(textState[0])
        setConnected(connectedState[0])
    } 

    return(
        <div className="button_wallet_container">
            <button className="button_two" onClick={account ? disconnectWallet : connectWallet}>{text}</button>
            <label className="label_wallet"> {connected} <i style={{color:account ? "#04f904" : "red"}} className="fa-sharp fa-solid fa-circle-check"></i></label>
        </div>
    )
}