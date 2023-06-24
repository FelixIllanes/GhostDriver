import { baseUrl as api, headers } from "./api.config";

export const get = (id) =>
    fetch(`${api}/api/person/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err));

export const getAll = () =>
    fetch(`${api}/api/person/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => console.log(err));


export const createUser = (body) =>
    fetch (`${api}/register/`, {method: 'POST', headers, body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data);

export const remove = (id) => 
    fetch (`${api}/api/person/${id}`, {method: 'DELETE', headers});

export const update = (body, id) =>
    fetch (`${api}/api/person/${id}/`, {method: 'PATCH', headers,body: JSON.stringify(body)})
        .then((res) => res.json())
        .then((data) => data);

export const getHistory = (id) =>
    fetch(`${api}/getAllTransaction/${id}`)
    .then((res) => res.json())
    .then((data) => data.transactions)

