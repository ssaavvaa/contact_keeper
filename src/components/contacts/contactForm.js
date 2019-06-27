import React , { useState , useContext , useEffect } from 'react'
import '../../styles/contactform.css';
import ContactContext from '../../context/ContactContext';



const ContactForm = (props) => {

    const contactContext = useContext(ContactContext);
    const { current , clearCurrent , updateContact } = contactContext;



    const [ contact , setContact ] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    useEffect(() => {
        if( current !== null ){
            setContact(current)
        }
      //eslint-disable-next-line
    },[])

    const onChange = e => setContact({
        ...contact,
        [e.target.name]: e.target.value
    })

    const onUpdate = e => {
        e.preventDefault()
        updateContact(contact)
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'   
        })
        props.history.push('/')
    }

    const onClear = () => {
        clearCurrent()
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'   
        })
    }

    const onSubmit = e => {
     
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        })
       
        props.history.push('/')
    }

   const { name , email , phone  } = contact;
 console.log(contact)
    return (
        <form className='add-contact' onSubmit = {onSubmit}>

         <input type='text' name='name' value={name} placeholder='Name' onChange={onChange} />
         <input type='text' name='email' value={email} placeholder='Email' onChange={onChange} />
         <input type='text' name='phone' value={phone} placeholder='Phone' onChange={onChange} />
         <h5>Contact Type : </h5>
        <div>
         <input type='radio' name='type' value='personal'  onChange={onChange}   />
         <label>Personal</label>
         </div>
         <div>
         <input type='radio' name='type' value='professional' onChange={onChange}  />
         Professional{' '}
         </div>
         {current && <button onClick = {onClear} >Clear</button>}
         {current === null?<button type='submit' onClick = {onSubmit} >SUBMIT</button>
                          :<button  onClick = {onUpdate} >Update</button>}

        </form>
    )
}

export default ContactForm;
