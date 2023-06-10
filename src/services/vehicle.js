import { baseUrl as api, headers } from "./api.config";

export const getAll = () =>
    fetch(`${api}/api/vehicle/`)
    .then((res) => res.json())
    .then((data) => data);

export const setVehiclePosition = () =>
    fetch(`${api}/updatelocations/`);