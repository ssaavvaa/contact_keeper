export default (state,action) => {
    switch(action.type){
    
    case 'USER_LOADED':
        return{ ...state, 
            isAuthenticated:true,
            loading:false,
            user:action.payload
        }
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
        localStorage.setItem('token', action.payload.token);
          return {
              ...state,
              token:action.payload.token,
              isAuthenticated:true,
              loading:false
          }
    case 'LOG_OUT':
    case 'LOGIN_FAIL':
    case 'AUTH_ERROR':
    case 'REGISTER_FAIL':
       localStorage.removeItem('token');
         return {
            ...state,
           token:null,
           isAuthenticated:false,
           loading:false,
           user:null,
           error:action.payload
    }

    case 'CLEAR_ERRORS':
        return{ ...state,
        error:null}

        default: return state;
    }
}