import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload: user
});

//google signin actions
export const googleSignInStart = ()=>({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const googleSignInSuccess = user=>({
    type: UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload: user
});

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: error
});

//email signin actions
export const emailSignInStart = emailAndPassword =>({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = user=>({
    type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: user
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: error
});


