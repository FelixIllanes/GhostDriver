import { baseUrl as api, headers } from "./api.config";

export const getAllInvoice = () =>
    fetch(`${api}/getPayInvoice/`)
     .then((res) => res.json())
     .then((data) => data.transactions);

export const getEnterpriseById = (id) =>
    fetch(`${api}/api/enterprise/${id}`)
     .then((res) => res.json())
     .then((data) => data);

export const createPDF = (id) =>
    fetch(`${api}/createpdf/${id}`)

export const invoiceToPay = () =>
    fetch(`${api}/getNotPayInvoice/`)
     .then((res) => res.json())
     .then((data) => data.transactions);

export const repair = (id, plate) =>{

    const body = {
        "id_invoice": id,
        "plate": plate
    }
    fetch(`${api}/repair/` , {method: 'POST', headers, body: JSON.stringify(body)})
    .then((res) => res.json())
    .then((data) => data)
}
    
