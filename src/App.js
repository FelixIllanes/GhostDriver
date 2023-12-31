import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UserCrud from "./Pages/UserCrud";
import VehicleCrud from "./Pages/VehicleCrud";
import InvoiceList from "./Pages/InvoiceList";
import MapPage from "./Pages/MapPage";
import CreateUser from "./Pages/CreateUser";
import UserHome from "./Pages/UserHome";
import { AuthProvider } from './store/user';
import HistorialPage from "./Pages/HistorialPage";
import UserIni from "./Components/Inicio/userIni";
import Invoices from "./Pages/Invoices";
import ServiceHistory from "./Pages/ServiceHistory";
import Report from "./Pages/Report";

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/CreateUser" element={<CreateUser/>}/>

            {/* Rutas para usuario */}
            <Route path='/User-Home' element={<UserHome/>}>
              <Route index element={<MapPage/>}/>
              <Route path="Historial" element={<HistorialPage/>}/>
            </Route>

            {/* Rutas para admin */}
            <Route path="/Admin-home" element={<Home/>}>
             <Route index element={<UserCrud/>}/>
              <Route path="VhclCrud" element={<VehicleCrud/>}/>
              <Route path="Invoice" element={<InvoiceList/>}/>
              <Route path="Invoce_pay" element={<Invoices/>}/>
              <Route path="ServiceHistory" element={<ServiceHistory/>}/>
              <Route path="Report" element={<Report/>}/>
            </Route>
            
            <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
