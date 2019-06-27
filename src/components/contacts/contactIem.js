import React, {useContext} from 'react';
import  '../../styles/contactItem.css';
import PropTypes from 'prop-types';
import ContactContext from '../../context/ContactContext';
import {  Link } from 'react-router-dom';


const ContactIem = ({ contact }) => {
 
    const contactContext = useContext(ContactContext);
    const { name , _id , email , phone , type } = contact;
    const { deleteContact, setCurrent , clearCurrent } = contactContext;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    }

    

    const onEdit = () => {
        setCurrent(contact)
       
    }

    return (
        <div>
     <div className='card'>
         <div style={{display:'flex', justifyContent:'space-between'}}>
         <h3 className = ''>
         {name}{': '}
         </h3>
             <span className = {`badge ${type === 'professional'?
                'badge-secondary':'badge-primary'} `}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            </div>
         <ul>
         {email && <li>
                   <i style={{color:'white', marginRight:'10px'}} className='fas fa-envelope-open'></i>
                   {email}
                   </li>
         }
         {phone && <li>
                   <i style={{color:'white', marginRight:'10px'}} className='fas fa-phone'></i>
                   {phone}
                   </li>
         }
         </ul>
         <Link to="/add_contact"> <button className="edit_button" onClick={onEdit}>edit</button></Link>
         <button className="delete_button" onClick = {onDelete}>delete</button>
     </div>
        </div>
    )
}

ContactIem.prototype = {
    contact:PropTypes.object.isRequired
}



export default ContactIem;
