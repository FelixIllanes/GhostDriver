import "./invoice.css"
import { createPDF, getEnterpriseById } from "../../services/invoice"
import { useEffect, useState } from "react"

function Invoice({invoice}) {

    const{id,nit, id_empresa, service_desc, price, plate} = invoice
    const[enterprise, setEnterprise] = useState([])

    useEffect(() => {
        getEnterpriseById(id_empresa).then(setEnterprise)
    }, []);    

    const handleClick = (evt) =>{
        createPDF(id)
    }

    if(invoice == [["vacio"]]){
        return(
            <h1 className="titulos" style={{marginTop:10+"rem", marginLeft: 20+"rem"}}>
                No hay facturas relacionadas con la busqueda
            </h1>
        )
    }

    return(
        <div className="invoice_container">
            <div className="btn_invoice">
                <h3>Información</h3>
                <button className="btn_print" onClick={handleClick}><i className="fa-solid fa-print"></i></button>
            </div>
            <div className="invoice_content">
                <p><b>Nit: </b> {nit}</p>
                <p><b>Placa: </b> {plate}</p>
                <p><b>Empresa: </b> {enterprise.enterprise_name}</p>
                <p><b>Descripcion: </b> {service_desc}</p>
                <p><b>Price:</b> {price} Bs</p>
            </div>
        </div>
    )
}
export default Invoice