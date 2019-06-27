import React, { useContext , Fragment , useEffect } from 'react';
import ContactContext from '../../context/ContactContext';
import ContactItem from './contactIem';
import Spinner from '../layout/spinner';

const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const { contacts , filtered , getContacts , loading } = contactContext;


    useEffect(() => {
        getContacts()

        //eslint-disable-next-line
    },[]);

if( !contacts.length && !loading){
    return (
    <div className="noContacts">
    <h2>You currently have no contacts</h2>
    <p>Please add some contacts</p>
    </div>
    )
}

return (
       <Fragment>
           {contacts !== null && !loading ? (
               filtered !== null
         ?filtered.map(contact => (
            <ContactItem key = { contact._id } contact = { contact } />
           ))
        :contacts.map(contact => (
            <ContactItem key = { contact._id } contact = { contact } />
        ))
           ) : <Spinner /> }
       
       </Fragment>
    )
};

export default Contacts;
