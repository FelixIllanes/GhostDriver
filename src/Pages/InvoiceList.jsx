import { useState, useEffect } from "react";
import Invoice from "../Components/Invoice";
import { getAllInvoice } from "../services/invoice";

export default function InvoiceList() {

    const[invoices, setInvoices] = useState([])

    useEffect(() => {
        getAllInvoice().then(setInvoices)
    }, [])

    return(
        <main>
            <div className="invoice_list">

            {invoices?.map((invoice, idx) =>(

                <Invoice key={idx} invoice={invoice}/>

            ))}
            
            </div>
        </main>
    )
}