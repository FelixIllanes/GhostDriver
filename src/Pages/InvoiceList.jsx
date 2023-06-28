import { useState, useEffect } from "react";
import Invoice from "../Components/Invoice";
import { getAllInvoice } from "../services/invoice";
import { searchInvoice } from "../services/general";

export default function InvoiceList() {

    const[invoices, setInvoices] = useState([])

    useEffect(() => {
        getAllInvoice().then(setInvoices)
    }, [])

    const[body, setBody] = useState({})

    const handleChange = (evt) =>{
        if((evt.target.name) === "plate"){
            setBody({
                ...body,
                [evt.target.name]: (evt.target.value).toUpperCase()
            })
        }else{
            setBody({
                ...body,
                [evt.target.name]: evt.target.value
            })
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        searchInvoice(body).then(data =>{
            if(data.length){
                setInvoices(data)
            }else{
                setInvoices(["vacio"])
            }
        })
    }

    return(
        <main>
            <h2 className="titulos">Facturas</h2>
            <div className="search_bar">
                <form onSubmit={handleSubmit}>
                <div className="search_input_container">
                    <div>
                        <label> Nit:</label> <br />
                        <input className="form_mod_input" 
                        type="numeric" 
                        name="nit"
                        id = "nit"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div>
                        <label> Descripción:</label> <br />
                        <input className="form_mod_input" 
                        type="text" 
                        name="description"
                        id = "description"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div>
                        <label> Placa:</label> <br />
                        <input className="form_mod_input" 
                        type="text" 
                        name="plate"
                        id = "plate"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div>
                        <label> Fecha inicial:</label> <br />
                        <input className="form_mod_input" 
                        type="date" 
                        name="start_date"
                        id = "start_date"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div>
                        <label> Fecha final:</label> <br />
                        <input className="form_mod_input" 
                        type="date" 
                        name="end_date"
                        id = "end_date"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div className="button_search">
                        <button className="button_one">Buscar</button>
                        <button type="button" onClick={()=>window.location.reload()} className="button_one">Mostrar todos</button>
                    </div>
                </div>
                </form>
            </div>

            <div className="invoice_list">

            {invoices?.map((invoice, idx) =>(

                <Invoice key={idx} invoice={invoice}/>

            ))}
            
            </div>
        </main>
    )
}