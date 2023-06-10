import "./invoice.css"
import { getEnterpriseById } from "../../services/invoice"
import { useEffect, useState } from "react"

function Invoice({invoice}) {

    const{nit, id_empresa, service_desc, price} = invoice
    const[enterprise, setEnterprise] = useState([])

    useEffect(() => {
        getEnterpriseById(id_empresa).then(setEnterprise)
    }, []);    

    return(
        <div className="invoice_container">
            <div className="btn_invoice">
                <h3>Información</h3>
                <button className="btn_print"><i class="fa-solid fa-print"></i></button>
            </div>
            <div className="invoice_content">
                <p><b>Nit: </b> {nit}</p>
                <p><b>Empresa: </b> {enterprise.enterprise_name}</p>
                <p><b>Descripcion: </b> {service_desc}</p>
                <p><b>Price:</b> {price} Bs</p>
            </div>
        </div>
    )
}
export default Invoice