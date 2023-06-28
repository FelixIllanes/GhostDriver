import { useEffect, useState } from "react"
import Historial from "../Components/Historial"
import { getHistory } from "../services/user"
import CarLoader from "../Components/CarLoader"
export default function HistorialPage() {

    const[historyData, setHistoryData] = useState([])

    useEffect(() =>{
        const userId = window.localStorage.getItem('userId');
        getHistory(userId).then(setHistoryData)
    },[]) 


    return(
        <main>
            <div className="container_cruduser_table">
                <table className="crud_table_usr">
                    <thead>
                        <th>Placa</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Distancia</th>
                        <th>Hora de salida</th>
                        <th>Hora de llegada</th>
                    </thead>

                {historyData?.map((oneHistory, idx) => (
                    <Historial key={idx} oneHistory={oneHistory} />
                ))}

                
                </table>
            </div>
        </main>
    )
}