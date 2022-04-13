import "./custom.scss"
import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './pages/landing-page/landing-page';
import Registro from "./pages/registro/registro";
import IniciarSesion from "./components/iniciar-sesion/iniciar-sesion";
import Header from "./components/header/header";
import CheckMail from "./components/check-mail/checkMail";
import Validate from "./pages/validate/validate";
import PersonalPage from "./pages/personal-page/personal-page";
import PrivateLogin from "./private-routes/private-login";
import TripRoute from "./pages/trip-route/trip-route";
import PersonalData from "./pages/personal-data/personal-data";
import NotFound from "./pages/not-found/not-found";
import Privacity from "./pages/privacity/privacity";
import Cookies from "./pages/cookies/cookies";
import Terminos from "./pages/terminos/terminos";






function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        
        
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/registro' element={<Registro />}></Route>
          <Route path='/iniciar-sesion' element={<IniciarSesion />}></Route>
          <Route path='/checkMail' element={<CheckMail />}></Route>
          <Route path='/validate' element={<Validate />}></Route>
          <Route path='/personal' element={<PrivateLogin><PersonalPage /></PrivateLogin>}></Route>
          <Route path='/trip' element={<PrivateLogin><TripRoute/></PrivateLogin>}></Route>
          <Route path='/data' element={<PrivateLogin><PersonalData/></PrivateLogin>}></Route>
          <Route path='/privacity' element={<Privacity />}></Route>
          <Route path='/cookies' element={<Cookies />}></Route>
          <Route path='/terminos' element={<Terminos />}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
         
        </Routes>
      

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
