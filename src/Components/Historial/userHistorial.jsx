function UserHistorial({transaction}){

    const{plate_vehicle, customer, travel_type, distance, price} = transaction

    let tType = 'Viaje'
    if(travel_type === 'D'){
        tType = 'Delivery'
    }else{
        if(travel_type === 'O'){
            tType = 'Otros'
        }
    }
    if(transaction == [["vacio"]]){
        return(
            <tbody>
                <tr>
                    <td colSpan={5} style={{fontSize: 20 +"px"}}>No hay transacciones relacionadas</td>
                </tr>
            </tbody>
        )
    }

    return(
        <tbody>
            <tr>
                <td>{plate_vehicle}</td>
                <td>{customer}</td>
                <td>{tType}</td>
                <td>{distance} Km</td>
                <td>{price} Bs</td>
            </tr>
        </tbody>
    )
}
export default UserHistorial