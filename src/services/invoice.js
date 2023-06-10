import { baseUrl as api, headers } from "./api.config";

export const getAllInvoice = () =>
    fetch(`${api}/getPayInvoice/`)
     .then((res) => res.json())
     .then((data) => data.transactions);

export const getEnterpriseById = (id) =>
    fetch(`${api}/api/enterprise/${id}`)
     .then((res) => res.json())
     .then((data) => data);