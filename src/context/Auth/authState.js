import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import setAuthToken from '../../utils/setTokenAuth'

const AuthState = props => {
    const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    error:null,
    user:null
    };

    const [state , dispatch] = useReducer(AuthReducer, initialState);

    //load user
const loadUser = async() => {

  if(localStorage.token){
    setAuthToken(localStorage.token)
  }

  try{
    const res = await axios.get('/api/auth');
    dispatch({
      type:'USER_LOADED',
      payload:res.data
  })
  }catch(err){
    dispatch({type:'AUTH_ERROR'});
  }
}
    //Register user
const register = async formData => {
  const config = {
    headers:{
      'Content-Type':'application/json'
    }
  }

  try {
    const res = await axios.post('api/users' , formData , config );
    dispatch({
      type:'REGISTER_SUCCESS',
      payload:res.data
    })
    loadUser()
}catch(err){
    dispatch({
      type:'REGISTER_FAIL',
      payload:err.response.data.msg
  })
}
}
    //login user
    const login = async formData => {
      const config = {
        headers:{
          'Content-Type':'application/json'
        }
      }
      try {
        const res = await axios.post('api/auth' , formData , config );
        dispatch({
          type:'LOGIN_SUCCESS',
          payload:res.data
        })
        loadUser()
    }catch(err){
        dispatch({
          type:'LOGIN_FAIL',
          payload:err.response.data.msg
      })
    }
    }
    //Logout user
    const logout = () => dispatch({type:'LOG_OUT'});

    //clear Errors
   const clearErrors = () => dispatch({type:'CLEAR_ERRORS'})


    return (
        <AuthContext.Provider
        value={{
          token:state.token,
          isAuthenticated:state.isAuthenticated,
          loading:state.loading,
          error:state.error,
          user:state.user,
          register,
          clearErrors,
          loadUser,
          login,
          logout
        }}>

        { props.children }
        </AuthContext.Provider>
    )

};

export default AuthState;