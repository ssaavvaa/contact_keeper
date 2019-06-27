import React, { Fragment } from 'react';
import NavBar from './components/layout/Navbar';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'; 
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from  './context/ContactState';
import AuthState from  './context/Auth/authState';
import ContactForm from './components/contacts/contactForm';
import AlertState from './context/Alert/AlertState'
import Register from './components/auth_user/Register';
import Login from './components/auth_user/LogIn';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setTokenAuth';
import PrivateRoute from './routing/privateRoute'
import './styles/reset.css';
import './styles/App.css';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
     <ContactState>
      <AlertState>
       <Router>
        <Fragment>
        <NavBar />
         <div className = 'container'>
           <Alerts />
         <Switch>
        
         <PrivateRoute exact path ='/' component = {Home} />
         <Route exact path ='/about' component = {About} />
         <Route exact path ='/add_contact' component = {ContactForm} />
         <Route exact path ='/register' component = {Register} />
         <Route exact path ='/login' component = {Login} />
         </Switch>
         </div>
       </Fragment>
       </Router>
      </AlertState>
     </ContactState>
    </AuthState>
  );
}

export default App;
