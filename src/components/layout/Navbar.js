import React , { Fragment, useContext } from 'react'
import PropTypes from 'prop-types';
import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Auth/authContext';
import ContactContext from '../../context/ContactContext';

const Navbar = ({ title , icon }) => {

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
    const { isAuthenticated , logout , user  } = authContext;
    const { clearContacts  } = contactContext;
 
     const onLogout = () => {
        logout();
        clearContacts();
     }

    const authLinks = (
     <Fragment >
        <li className="Link">
           Hello {user && user.name}
        </li>
        <li>
                <Link className="Link" to ='/add_contact'>Add contact</Link>
            </li>
        <li >
            <a className="Link"  href='#!' onClick = {onLogout}>
            <i className = 'fas fa-sign-out-alt'></i> 
            logout
            </a>
        </li>
     </Fragment>
    )

    const guestLinks = (
        <Fragment >
           <li>
                <Link className="Link" to ='/register'>Register</Link>
            </li>
            <li>
                <Link className="Link" to ='/login'>Login</Link>
            </li>
        </Fragment>
       )

    return (
        <div className = "NavBar">
        <h1 >
            <i className={icon} style={{color:'white'}}></i> {title}
        </h1>
        <ul>
        {isAuthenticated?authLinks:guestLinks}
        </ul>
        </div>
    )
}



Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}

Navbar.defaultProps = {
    title:'Contact Keeper',
    icon:'fas fa-id-card-alt'
}

export default Navbar;