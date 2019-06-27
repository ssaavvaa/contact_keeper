

export default ( state , action ) => {
    switch(action.type) {
    case('ADD_CONTACT'):
        return { ...state,
             contacts:[action.payload ,...state.contacts],
            loading:false}

    case('DELETE_CONTACT'):
        const newContacts = state.contacts.filter(contact => contact._id !== action.payload)
        return { ...state, contacts:newContacts , loading:false}

    case('SET_CURRENT'):
        return { ...state, current:action.payload}

    case('GET_CONTACTS'):
        return{ ...state, contacts: action.payload,
                 loading:false  }

    case('CLEAR_CURRENT'):
        return { ...state, current:null, loading:false}

    case('CLEAR_CONTACTS'):
        return { ...state, current:null, filtered:null, contacts:[]}    

    case('UPDATE_CONTACT'):
        return { ...state,
            loading:false,
            contacts:state.contacts.map(contact => contact._id === action.payload._id
                                         ?action.payload : contact
                )}
    case('FILTER_CONTACT'):
        return { ...state,
            filtered:state.contacts.filter(contact => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return contact.name.match(regex) || contact.email.match(regex)
            })
         }
    case('CLEAR_FILTER'):
        return { ...state, filtered:null}

    case('CONTACT_ERROR'):
        return { ...state, error:action.payload , loading:false}

        default: return state
    }
    }

