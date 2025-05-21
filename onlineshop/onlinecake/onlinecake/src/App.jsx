import React from 'react';

import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import LoginComponent from './Components/LoginComponent';
import SignUpComponent from './Components/SignUpComponent';
import CakeDetailsComponent from './Components/CakeDetailsComponent';
import BookingComponent from './Components/BookingComponent';
import AdminComponent from './Components/AdminComponent';
import ViewMyDetails from './Components/ViewMyDetails';
import AllOrders from './Components/AllOrders';
import AddProduct from './Components/AddProduct';
import AdminViewProduct from './Components/AdminViewProduct';
// import UserNavbar from './Components/UserNavbar';
const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/signup' element={<SignUpComponent />}></Route>
        <Route path='/cakedetail' element={<CakeDetailsComponent />}></Route>
        <Route path='/booking' element={<BookingComponent />}></Route>
        <Route path='/adminlogin' element={<AdminComponent />}></Route>
        <Route path='/ViewMyDetails' element={<ViewMyDetails />}></Route>
        <Route path='/AllOrders' element={<AllOrders />}></Route>
        <Route path='/AddProduct' element={<AddProduct />}></Route>
        <Route path='/AdminViewProduct' element={<AdminViewProduct />}></Route>
        {/* <Route path='/UserNavbar' element={<UserNavbar />}></Route>   */}
        {/* <Route path='/home' element={<TaskdesComponent />}></Route>
        <Route path='/addtask' element={<AddtaskComponent />}></Route>
        <Route path='/logout' element={<LogoutComponent />}></Route>
        <Route path='/updateassignee' element={<UpdateAssignee />}></Route> */}



      </Routes>
    </div>
  );
}

export default App;
