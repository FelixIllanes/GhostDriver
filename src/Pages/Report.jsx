import { useState } from "react"
import { reportInvoices } from "../services/reporte"

export default function Report(){
    
    const[fechaIni, setFechaIni] = useState()
    const[fechaFin, setFechaFin] = useState()

    const handleChange = (evt) => {
        if((evt.target.name) === "fecha_ini"){
            setFechaIni(evt.target.value)
        }else{
            setFechaFin(evt.target.value)
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        reportInvoices(fechaIni, fechaFin)
    }

    return(

        <main>
            <h2 className="titulos">Generar Reporte</h2>
            <div className="report_container">
                <form onSubmit={handleSubmit}>
                <div className="inputs_container">
                    <div>
                        <label> Fecha final:</label> <br />
                        <input className="form_mod_input" 
                        type="date" 
                        name="fecha_ini"
                        id = "end_date"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                    <div>
                        <label> Fecha final:</label> <br />
                        <input className="form_mod_input" 
                        type="date" 
                        name="fecha_fin"
                        id = "end_date"
                        onChange={handleChange}
                        autocomplete="off"/>
                    </div>
                </div>
                <button className="button_one">Crear PDF</button>
                </form>
            </div>
        </main>
    )
}