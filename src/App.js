import React from 'react'
import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Amman from './pages/Amman'
import Salt from './pages/Salt'
import Jerash from './pages/Jerash'
import Madaba from './pages/Madaba'
import Ajlun from './pages/Ajlun'
import Karak from './pages/Karak'
import Aqaba from './pages/Aqaba'
import Deadsea from './pages/Deadsea'
import Wadirum from './pages/Wadirum'
import Petra from './pages/Petra'
import PlaceAdmin from './pages/PlaceAdmin'
import Header from './pages/Header'
import ResturantAdmin from './pages/ResturantAdmin'
import Resturant from  './pages/Resturant'

import ContactForm from './pages/ContactForm'
import {
  BrowserRouter as Router,
   
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Amman" component={Amman} />
        <Route path="/Salt" component={Salt} />
        <Route path="/Jerash" component={Jerash} />
         <Route path="/Madaba" component={Madaba} />
           <Route path="/Ajlun" component={Ajlun} />
             <Route path="/Karak" component={Karak} />
               <Route path="/Aqaba" component={Aqaba} />
               <Route path="/Deadsea" component={Deadsea} />
                    <Route path="/Wadirum" component={Wadirum} />
                    <Route path="/Petra" component={Petra} />
                        
                          <Route path="/PlaceAdmin" component={PlaceAdmin} />
                          <Route path="/ResturantAdmin" component={ResturantAdmin} />
                          <Route path="/ContactForm" component={ContactForm} />
                        
      </Switch>
      </BrowserRouter>
  )
}
export default App