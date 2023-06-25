import "./invoice.css"
import { createPDF, getEnterpriseById, repair } from "../../services/invoice"
import { useEffect, useState } from "react"
import { sendEther2 } from "../../services/Contract2"

function Normal_invoice({invoice}) {

    const{id,nit, id_empresa, service_desc, price, plate} = invoice
    const[enterprise, setEnterprise] = useState([])

    useEffect(() => {
        getEnterpriseById(id_empresa).then(setEnterprise)
    }, []);    

    const[body, setBody] = useState({})

    const make_contract = async () => {
        let ether_price = price*(0.000076423172155)
        await sendEther2(String(ether_price))
        repair(id, plate)
        window.location.reload()
    }

    const handleClick = (evt) =>{
        make_contract()
    }

    return(
        <div className="invoice_container">
            <div className="btn_invoice">
                <h3>Información</h3>
            </div>
            <div className="invoice_content">
                <p><b>Nit: </b> {nit}</p>
                <p><b>Empresa: </b> {enterprise.enterprise_name}</p>
                <p><b>Placa del Vehiculo</b> {plate}</p>
                <p><b>Descripcion: </b> {service_desc}</p>
                <p><b>Price:</b> {price} Bs</p>
            </div>
            <button className="button_one" onClick={handleClick}>Pagar</button>
        </div>
    )
}
export default Normal_invoice