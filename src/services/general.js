import { baseUrl as api, headers } from "./api.config";

export const getPrice = (latUser, lngUser, distance) =>
    fetch(`${api}/getPrice/${latUser}/${lngUser}/${distance}/`)
    .then((res) => res.json())
    .then((data) => data);

export const startTravel = (plate, userId, type, initLat, initLng, destLat, destLng, travelTime, distance, price) =>
    {
    
    const departure_time = Date.now()

    const body = {
        "plate_vehicle":plate,
        "id_customer": userId,
        "type":type,
        "departure_lat": initLat,
        "departure_lng": initLng,
        "arrival_lat": destLat,
        "arrival_lng": destLng,
        "travelTime": travelTime,
        "distance": distance,
        "price": price,
    }
    fetch(`${api}startTravel/`,{method: 'POST', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data);
    }

    export const endTravel = (plate, distance) =>{

        const body = {
            "plate": plate,
            "distance": distance,
        }
        fetch(`${api}endTravel/`, {method: 'POST', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data)
    }
        
    export const allTransactions = () =>
        fetch(`${api}/allTransactions/`)
        .then((res) => res.json())
        .then((data) => data.transacciones)

    export const searchTransactions = (body) =>
        fetch(`${api}/searchTransacciones/` , {method: 'POST', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data.transacciones)

    export const searchInvoice = (body) =>
        fetch(`${api}/searchInvoice/` , {method: 'POST', headers, body:JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data.invoices)