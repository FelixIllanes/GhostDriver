import { baseUrl as api, headers } from "./api.config";

export const reportInvoices = (fecha_ini, fecha_fin) =>
    fetch(`${api}/create_report_invoice/${fecha_ini}/${fecha_fin}/`)
    .then((res) => res.json())
    .then((data) => data)

