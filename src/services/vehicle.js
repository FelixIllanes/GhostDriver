import { baseUrl as api, headers } from "./api.config";

export const getAll = () =>
    fetch(`${api}/api/vehicle/`)
    .then((res) => res.json())
    .then((data) => data);

export const setVehiclePosition = () =>
    fetch(`${api}/updatelocations/`);

export const vehicleUpdate = (body, plate) =>
    fetch(`${api}/api/vehicle/${plate}/` , {method: 'PATCH', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)