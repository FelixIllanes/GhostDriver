import CrudVhls from "../Components/CrudVhls"
import { useState, useEffect } from "react"
import { getAll } from "../services/vehicle"
export default function VehicleCrud() {

    const [ vehicles, setVehicles ] = useState([])

    useEffect(() => {
        getAll().then(setVehicles)
    }, [])

    return(
        <main>
            <h2 className="titulos">Lista de vehiculos</h2>
            <div className="container_cruduser_table">
                <table className="crud_table_usr">
                    <thead>
                        <th>Placa</th>
                        <th>Estado del vehiculo</th>
                        <th>Batery</th>
                        <th>S. Frenado</th>
                        <th>Suspension</th>
                        <th>Ruedas</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>Limpieza</th>
                        <th>Kilometraje</th>
                    </thead>
                    {vehicles?.map((vehicle, idx) =>(

                        <CrudVhls key={idx} vehicle={vehicle}/>
                    ))}

                </table>
            </div>
        </main>
    )
}