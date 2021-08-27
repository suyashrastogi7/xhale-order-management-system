import userTypes from "./user.types";

const INITIAL_STATE = {
    user : {
        user : {
            username : '',
            loginResult : false
        }
    }
}

const userReducer = (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case userTypes.SET_CURRENT_USER : 
        {
            return{
                ...state,
                user : action.payload
            }
        }
        default : 
        return state
    }
};

export default userReducer;