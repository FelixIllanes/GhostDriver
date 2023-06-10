function CrudVhls({vehicle}) {

    const{plate,vehicle_state,batery,brake_system,suspension,tire_1,tire_2,tire_3,tire_4,model,year,cleaning,mileage,is_free,tax,latitud,longitud} = vehicle

    return(
        <tbody>
            <tr>
            <td>{plate}</td>
                <td>{vehicle_state}</td>
                <td>{batery}%</td>
                <td>{brake_system}%</td>
                <td>{suspension}%</td>
                <td className="tire">
                    <td>
                        <b>Rueda1</b> <br/>
                        {tire_1}%
                    </td>
                    <td>
                        <b>Rueda2</b><br/>
                        {tire_2}%
                    </td>
                    <tr></tr>
                    <td>
                        <b>Rueda3</b><br/>
                        {tire_3}%
                    </td>
                    <td>
                        <b>Rueda4</b><br/>
                        {tire_4}%
                    </td>
                </td>
                <td>{model}</td>
                <td>{year}</td>
                <td>{cleaning}%</td>
                <td>{mileage} Km</td>
{/*                 <td className="buttons_crud">
                    <button className="btn_update"><i className="fa-solid fa-pen"></i></button>
                    <button className="btn_delete"><i className="fa-solid fa-trash-can"></i></button>
                </td> */}
            </tr>
        </tbody>
    )
}
export default CrudVhls