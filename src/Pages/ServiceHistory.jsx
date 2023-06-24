import { useEffect, useState } from "react"
import UserHistorial from "../Components/Historial/userHistorial"
import { allTransactions, searchTransactions } from "../services/general"
export default function ServiceHistory() {

    const[transactions, setTransactions] = useState([])

    useEffect(() => {
        allTransactions().then(setTransactions)
    }, [])

    const[body, setBody] = useState({})

    const handleChange = (evt) =>{
        
        if((evt.target.name) === "plate_vehicle"){
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

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        searchTransactions(body).then(data => {
            if(data.length){
                setTransactions(data)
            }else{
                setTransactions(["vacio"])
            }
        })

    }

    return(

        <main>
            <h2 className="titulos">Transacciones</h2>
            <div className="container_transactions">
                <div className="search_bar_transaction">
                    <form onSubmit={handleSubmit}>
                    <div className="search_transactions">
                        <div>
                            <label> Ci:</label> <br />
                            <input className="form_mod_input" 
                            type="numeric" 
                            name="ci"
                            id = "ci"
                            onChange={handleChange}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label> Placa:</label> <br />
                            <input className="form_mod_input" 
                            type="text" 
                            name="plate_vehicle"
                            id = "plate_vehicle"
                            onChange={handleChange}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label> Tipo de viaje:</label> <br />
                            <select className="travel_type" onChange={handleChange} name="travel_type" id="travel_type">
                            <option value="" selected>Todos</option>
                            <option value="V">Viaje</option>
                            <option value="D">Delivery</option>
                            <option value="O">Otros</option>
                        </select>
                        </div>
                        <div>
                            <label> Fecha Inicio:</label> <br />
                            <input className="form_mod_input" 
                            type="date" 
                            name="start_date"
                            id = "start_date"
                            onChange={handleChange}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label> Fecha Fin:</label> <br />
                            <input className="form_mod_input" 
                            type="date" 
                            name="end_date"
                            id = "end_date"
                            onChange={handleChange}
                            autoComplete="off"/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="button_one">Buscar</button>
                    </div>
                    </form>
                </div>

                <table className="crud_table_usr">
                    <thead>
                        <th>Placa</th>
                        <th>Ci Usuario</th>
                        <th>Tipo de viaje</th>
                        <th>Distancia</th>
                        <th>Precio</th>
                    </thead>

                    {transactions?.map((transaction, idx) => (

                        <UserHistorial key={idx} transaction={transaction}/>

                    ))}
                
                </table>
            </div>
        </main>
    )
}