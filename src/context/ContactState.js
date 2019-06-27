import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

const ContactState = props => {
    const initialState = {
    contacts:[],
        current:null,
        filtered:null,
        error:null
    };

    const [state , dispatch] = useReducer(ContactReducer, initialState);

    //getContsacts

    const getContacts = async contact => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({ type:'GET_CONTACTS', payload:res.data })
        } catch (err) {
              dispatch({
                  type:'CONTACT_ERROR',
                payload:err.response.msg
            })
        }

    }

    //Add contact
    const addContact = async contact => {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const res = await axios.post('/api/contacts', contact , config);
            dispatch({ type:'ADD_CONTACT', payload:res.data })
        } catch (err) {
              dispatch({
                  type:'CONTACT_ERROR',
                payload:err.response.msg
            })
        }

    }

    //deleteContact
    const deleteContact = async id => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({ type:'DELETE_CONTACT', payload:id })

        } catch (err) {
              dispatch({
                  type:'CONTACT_ERROR',
                payload:err.response.msg
            })
        }
        dispatch({ type:'DELETE_CONTACT', payload:id })
    }

    const clearContacts = () => {
        dispatch({ type:'CLEAR_CONTACTS' })
    }

    //setCurrentContact
    const setCurrent = contact => {
        dispatch({ type:'SET_CURRENT', payload:contact })
    }
    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type:'CLEAR_CURRENT' })
    }
    //Update current Contact
    const updateContact = async contact => {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/contacts/${contact._id}`, contact , config);
            dispatch({ type:'UPDATE_CONTACT', payload:res.data })
    
        } catch (err) {
   
              dispatch({
                  type:'CONTACT_ERROR',
                  payload:err.response.msg
            })
        }
    }
    //filter Contacs
    const filterContacts = text => {
        dispatch({ type:'FILTER_CONTACT', payload:text })
    }
    //clear Filter
    const clearFilter = () => {
        dispatch({ type:'CLEAR_FILTER' })
    }

    return (
        <ContactContext.Provider
        value={{
        contacts:state.contacts,
        current:state.current,
        filtered:state.filtered,
        error:state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
        }}>

        { props.children }
        </ContactContext.Provider>
    )

};

export default ContactState;