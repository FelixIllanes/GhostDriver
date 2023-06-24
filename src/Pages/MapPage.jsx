import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from "@react-google-maps/api"
import { useEffect, useMemo, useState } from "react";
import { getAll } from "../services/vehicle";
import { getPrice, startTravel } from "../services/general";
import { sendEther } from "../services/Contract";
import { reverseGeocode } from "../services/geocode";
import { get } from "../services/user";
import Modal_EndTravel from "../Components/Modal/modal_endtravel";


export default function MapPage() {

    const[userPos, setUserPos] = useState([])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    }); 

    const[loaded, setLoaded] = useState(true)

    useEffect(() => {
        const espera = async () => {
            const userId = window.localStorage.getItem('userId');
            get(userId).then(setUserPos);
            await new Promise(resolve => setTimeout(resolve,1000));
            setLoaded(false)
        }
        espera()
    }, []);

    if(loaded){
        return <main><div className="loader"></div></main>
    }
    
    if (!isLoaded) return <main><div className="loader"></div></main>;
    return(
        <main>
            <Map userPos={userPos}/>
        </main>
    );

}
function Map({userPos}) {

    const{ci, name, lastname, city, email, latitud, longitud} = userPos

    
    const center = useMemo(() => ({ lat: Number(latitud), lng: Number(longitud)}), []);
    

    const[initPos, setInitPos] = useState([])

    const [ vehicles, setVehicles ] = useState([])

    useEffect(() => {

        getAll().then(setVehicles)
        reverseGeocode(latitud, longitud).then(setInitPos)

    }, [])

    const[address, setAddress] = useState('')

    const[price, setPrice] = useState([])

    const[posicion, setPosicion] = useState(null);   

    const[flag, setFlag] = useState(true); 

    const[typeService, setTypeService] = useState('')

    const[distanceValue, setDistanceValue] = useState('')
    const[durationValue, setDurationValue] = useState('')


    //Funcion para seleccionar una posicion en el mapa 
    
    const handleMapClick = (event) =>{
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setPosicion({lat, lng});
        reverseGeocode(lat, lng).then(setAddress)


    }; 

    const handleChange = (evt) =>{
        setTypeService(evt.target.value)
        console.log(evt.target.value)
    } 


    const[directions, setDirections] = useState();
    //Contantes para los valores convertidos para el usuario
    const[distance, setDistance] = useState('')
    const[duration, setDuration] = useState('')

    const fetchDirections = (center) =>{
        if(!posicion) return;

        //eslint-disable-next-line no-undef
        const service = new google.maps.DirectionsService();
        //Trazando la ruta mas optima para llegar al destino desde nuestro origen
        service.route(
            {
                origin: center,
                destination: posicion,
                //eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) =>{
                if(status === 'OK' && result){
                    setFlag(false)
                    setDirections(result);
                    //Calculando la distancia y la duracion del recorrido convertido a km y minutos
                    setDistance(result.routes[0].legs[0].distance.text);
                    setDuration(result.routes[0].legs[0].duration.text);
                    setDistanceValue(result.routes[0].legs[0].distance.value);
                    setDurationValue(result.routes[0].legs[0].duration.value);

                    setIsOpen(true);
                    
                    //Llamando a la funcion getPrice donde mandamos la posicion y la distancia para que nos devuelva el precio
                    getPrice(center.lat, center.lng, result.routes[0].legs[0].distance.value).then(setPrice);
                }
            }
        )
        
    }
    
    const make_contract = async () => {
        await sendEther(String(price.precio_eth))
        const userId = window.localStorage.getItem('userId');
        startTravel(price.plate, userId,typeService, center.lat, center.lng, posicion.lat, posicion.lng, durationValue, distanceValue, price.precio_bs)
        setOpenModal(true)
    }; 

    
    const[isOpen, setIsOpen] = useState(false)

    const[openModal, setOpenModal] = useState(false)


    return(
        <> 
        {openModal && <Modal_EndTravel closeModal={setOpenModal} plate={price.plate} distance={distanceValue}/>}
        <div className="map_layout"> 
            <GoogleMap zoom={16} 
                center={center}
                onClick={flag && handleMapClick} 
                mapContainerClassName="map_container"
                options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
            >
                {posicion && <MarkerF position = {posicion}/>} 
                <MarkerF position={center} />

                {directions && <DirectionsRenderer directions={directions}/>}

                {vehicles?.map((vehicle, idx) =>(

                    <MarkerF key={idx} 
                    position={{lat:vehicle.latitud, lng:vehicle.longitud}}
                        options={{
                        icon : {
                            url: require("../taxi-stand.svg").default,
                        }
                       }} 
                    />
                ))}

            </GoogleMap>
            <div className= { posicion ? "mapa_data_panel" : "panel_uno"} >
                <h2>Información</h2>
                <div>
                    <label> Ubicación actual</label>
                    <p> {initPos} </p>
                </div>
                <div style={{display: posicion ? "block" : "none"}}>
                    <label>Destino</label>
                    <p>{posicion && address}</p>
                </div> 
                <button
                    onClick={() =>{ fetchDirections(center)}} 
                    className="button_two" style={{display: distance ? "none" :posicion ? "block" : "none"}}>Calcular
                </button>

                <form className="form_map_data" style={{display: isOpen ? "block" : "none"}}>
                    <div>
                        <label>Distancia estimada: </label>
                        <label style={{color:"white"}}>&nbsp;{distance}</label>
                    </div>
                    <div>
                        <label>Tiempo estimado:  </label>
                        <label style={{color:"white"}}> &nbsp;{duration}</label>
                    </div>
                    <div>
                        <label>Precio: </label>
                        <label style={{color:"white"}}> &nbsp;{price.precio_bs} &nbsp;Bs.</label>
                    </div>
                    <div>
                        <label>Placa: </label>
                        <label style={{color:"white"}}> &nbsp;{price.plate}</label>
                    </div>
                    <div>
                        <label>Modelo: </label>
                        <label style={{color:"white"}}> &nbsp;{price.model} </label>
                    </div>
                    <div>
                        <label> Seleccione el tipo de servicio</label>
                    </div>
                    <select className="travel_type" onChange={handleChange} name="travel_tipe" id="type">
                        <option value="V" selected>Viaje</option>
                        <option value="D">Delivery</option>
                        <option value="O">Otros</option>
                    </select> <br />
                    <div className="btns_forms">
                        <button className="button_two"  type="button" onClick={make_contract} >Enviar </button>
                        <button className="button_two" type="button" onClick={()=>window.location.reload()}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div> 
    </>     
    );
}