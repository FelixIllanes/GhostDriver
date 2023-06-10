import Historial from "../Components/Historial"
export default function HistorialPage() {
    return(
        <main>
            <div className="container_cruduser_table">
                <table className="crud_table_usr">
                    <thead>
                        <th>Placa</th>
                        <th>Tipo de viaje</th>
                        <th>Lugar de salida</th>
                        <th>Lugar de llegada</th>
                        <th>Ditancia</th>
                        <th>Timepo de llegada</th>
                        <th>Precio</th>
                    </thead>
                    <Historial />
                </table>
            </div>
        </main>
    )
}