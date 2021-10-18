import { publicRequest } from "../webpages/requestMethod";
import { loginFailure, loginSuccess, loginStart } from "./userRedux"

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
            const res = await publicRequest.post("/auth/login", user)
            dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure())
    }
};