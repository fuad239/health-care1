import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home/Home';

import Header from './pages/Shared/Header/Header';

import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Home/Services/Services';
import Login from './pages/Shared/Login/Login';
import PrivateRoute from './pages/Shared/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Shared/Register/Register';
import AuthProvider from './context/AuthProvider';
import Ambulance from './pages/Home/Services/Services/Ambulance/Ambulance';
import QuickCall from './pages/Home/Services/Services/Ambulance/QuickCall/QuickCall';
import DocInfo from './pages/Shared/Doctors/DocInfo/DocInfo';


import Checkup from './pages/Home/Services/Services/Checkup/Checkup';
import Covid from './pages/Home/Services/Services/Covid/Covid';
import Vaccine from './pages/Home/Services/Services/Covid/Vaccine/Vaccine';
import Medicines from './pages/Home/Services/Services/Medicines/Medicines';
import Appoinment from './pages/Home/Services/Services/Appoinment/Appoinment';
import NeedAppointment from './pages/Home/Services/Services/Appoinment/NeedApointment/NeedAppointment';
import Icu from './pages/Home/Services/Services/ICU/Icu';
import Footer from './pages/Shared/Footer/Footer';


function App() {




  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Header></Header>

          <Routes>

            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Register></Register>}></Route>


            {/* ---------------Private route */}
            <Route path='/ambulance' element={<PrivateRoute><Ambulance></Ambulance></PrivateRoute>}></Route>
            <Route path='/checkup' element={<PrivateRoute><Checkup></Checkup></PrivateRoute>}></Route>
            <Route path='/covid' element={<PrivateRoute><Covid></Covid></PrivateRoute>}></Route>
            <Route path='/vaccine' element={<PrivateRoute><Vaccine></Vaccine></PrivateRoute>}></Route>
            <Route path='/medicine' element={<PrivateRoute><Medicines></Medicines></PrivateRoute>}></Route>
            <Route path='/appointment' element={<PrivateRoute><Appoinment></Appoinment></PrivateRoute>}></Route>
            <Route path='/needappointment' element={<PrivateRoute><NeedAppointment></NeedAppointment></PrivateRoute>}></Route>
            <Route path='/icu' element={<PrivateRoute><Icu></Icu></PrivateRoute>}></Route>

            <Route path="/doctors/:userId" element={<PrivateRoute><DocInfo></DocInfo></PrivateRoute>}></Route>

            <Route path='/quickcall' element={<PrivateRoute><QuickCall></QuickCall></PrivateRoute>}></Route>

            {/* ------------------------------------- */}


            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
