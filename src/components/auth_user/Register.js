import React, { useState , useContext , useEffect } from 'react'
import '../../styles/register.css';
import AlertContext from '../../context/Alert/AlertContext';
import AuthContext from '../../context/Auth/authContext';

const Register = (props) => {

const alertContext = useContext(AlertContext);
const authContext = useContext(AuthContext);

const { setAlert } = alertContext;
const { register , error , clearErrors , isAuthenticated } = authContext;


 useEffect(() => {
    if(isAuthenticated){
     props.history.push('/');
    }
    if(error === 'User already exist'){
        setAlert(error, "danger", 3000);
        clearErrors();
    }

    //eslint-disable-next-line
 }, [error , isAuthenticated , props.history]);

    const [user , setUser] = useState({
        name:'',
        email:'',
        password:'',
        password_2:''
    });

    const onChange = e => setUser({
     ...user,
     [e.target.name]:e.target.value
    });

    const { name , email , password , password_2 } = user;

    const onSubmit = e => {
        e.preventDefault()
        if(name === "" || name === null){
          return setAlert("Please enter a name", "danger", 3000)
        }
          //eslint-disable-next-line
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
          return setAlert("Please enter a valid Email!", "danger", 3000)
         }
         if(password.length < 5){
           return setAlert("Password length must be more than 5 characters!", "danger", 3000)   
         }
         if(password !== password_2){
           return setAlert("Passwords don't match!", "danger", 3000)   
         }

         register({ name , email , password })
    }



    return (
        <div className="register-wrapper" >
            <h1>Account Register</h1>
            <form className ='register-container' onSubmit = {onSubmit}>
            <label htmlFor='name'>Name</label>
            <input type = 'text' name ='name' value={name} onChange = {onChange} required />
            <label htmlFor='email'>Email</label>
            <input type = 'email' name ='email' value={email} onChange = {onChange} required />
            <label htmlFor='password'>Password</label>
            <input type = 'text' name ='password' value={password} onChange = {onChange} required />
            <label htmlFor='password_2'>Confirm password</label>
            <input type = 'text' name ='password_2' value={password_2} onChange = {onChange} required />
            <button  type = 'submit'> Submit </button>
            </form>
        </div>
    )
}

export default Register;
