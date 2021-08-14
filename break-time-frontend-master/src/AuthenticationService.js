import React from 'react'

class AuthenticationService{

    save=(username)=>{
        
        sessionStorage.setItem('username',username);
    }

    isUserLoggedIn=()=>{
        let user= sessionStorage.getItem('username');
        if(user===null)
        {
            return false;
        }
        else
        return true;
    }
}
export default AuthenticationService
