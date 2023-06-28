import { useEffect, useState } from "react"
import { reverseGeocode } from "../../services/geocode"

function Historial({oneHistory}) {

    const{plate_vehicle,travel_type, departure_place_lat, departure_place_long, arrival_place_lat,arrival_place_long, departure_time, arrival_time, distance, price } = oneHistory
    
    let tType = 'Viaje'
    if(travel_type === 'D'){
        tType = 'Delivery'
    }else{
        if(travel_type === 'O'){
            tType = 'Otros'
        }
    }

    return(
        <tbody>
            <tr>
                <td>{plate_vehicle}</td>
                <td>{tType}</td>
                <td>{price} Bs</td>
                <td>{distance} Km</td>
                <td>{departure_time}</td>
                <td>{arrival_time}</td>
            </tr>
        </tbody>
    )
}
export default Historial