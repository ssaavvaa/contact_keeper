import React, { useContext , useRef , useEffect} from 'react';
import ContactContext from '../../context/ContactContext'
import '../../styles/filter.css';

const FilterContacts = () => {

    const contactContext = useContext(ContactContext);
    const text = useRef('')
    const { filterContacts , clearFilter , filtered } = contactContext;

    useEffect(() => {
     if(filtered === null){
         text.current.value = '';
     }
    })

    const onChange = e => {
        if(text.current.value !== ''){
            filterContacts(e.target.value) 
        }else {
            clearFilter()
        }
    }

    return (
        <form >
            <input className="filterInput" ref={text} type='text' placeholder = 'Search in contacts...' onChange = {onChange} />
        </form>
    )
}

export default FilterContacts;
