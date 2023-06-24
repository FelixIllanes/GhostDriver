import Normal_invoice from "../Components/Invoice/normal_invoice"
import { useState, useEffect } from "react"
import { invoiceToPay } from "../services/invoice"
export default function Invoices() {

    const[invoices, setInvoices] = useState([])

    useEffect(() => {
        invoiceToPay().then(setInvoices)
    }, [])

    if(invoices.length === 0){
        return(
            <main>
                <h2 className="titulos">Pagar facturas</h2>
                <h1 className="titulos" style={{marginTop:10+"rem", color:"white"}}>No hay facturas pendientes</h1>
            </main>
        )
    }  

    return(
        <main>
            <h2 className="titulos">Pagar facturas</h2>
            <div className="invoice_list">

            {invoices?.map((invoice, idx) =>(

                <Normal_invoice key={idx} invoice={invoice}/>

            ))}
            
            </div>
        </main>
    )
}