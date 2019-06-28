import React, { useState , useContext , useEffect } from 'react'
import AlertContext from '../../context/Alert/AlertContext';
import AuthContext from '../../context/Auth/authContext';
import '../../styles/login.css';



const Login = (props) => {
    

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login , error , clearErrors , isAuthenticated } = authContext;


    useEffect(() => {
        if(isAuthenticated){
         props.history.push('/');
        }
        if(error === 'invalid credentials'){
            setAlert(error, "danger", 3000);
            clearErrors();
        }
        //eslint-disable-next-line
     }, [error , isAuthenticated , props.history]);

    const [user , setUser] = useState({
        email:'',
        password:''
    });

    const onChange = e => setUser({
     ...user,
     [e.target.name]:e.target.value
    });

    const onSubmit = e => {
        e.preventDefault()

        if(email === '' || email === null){
           return setAlert("Please enter an Email!", "danger", 3000)
        }
        if(password === '' || password === null){
           return setAlert("Please enter a password!", "danger", 3000)
        }

        login({
            email , password
        })
 

    }

    const {  email , password } = user;

    return (
        <div className="login-wrapper" >
            <h1>Account Login</h1>
            <form className ='login-container' onSubmit = {onSubmit}>
            <label htmlFor='email'>Email</label>
            <input type = 'email' name ='email' value={email} onChange = {onChange} />
            <label htmlFor='password'>Password</label>
            <input type = 'text' name ='password' value={password} onChange = {onChange} />
            <button  type = 'submit'> Submit </button>
            </form>

        </div>
    )
}

export default Login;