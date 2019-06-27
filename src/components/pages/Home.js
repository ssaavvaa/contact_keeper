import React , { Fragment , useContext , useEffect } from 'react';
import Contacts from '../contacts/contacts';
import FilterContacts from '../contacts/filterCOntacts'
import AuthContext from '../../context/Auth/authContext';

import '../../styles/home.css';

const Home = () => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    //eslint-disable-next-line
    },[]);

    return (
        <Fragment>
        <FilterContacts />
        <div className ='Home'>
            <Contacts />
        </div>
        </Fragment>
    )
}

export default Home;
