import moment from "moment";
const length = 3;
export const isLoggedIn = () => {
    if (typeof window !== 'undefined') {
    const user  = localStorage.getItem('user_details') || false;
    if(user){
        const newuser = JSON.parse(user);
        if(newuser.expiry){
            const expiry = newuser.expiry;
            const diff = moment(expiry).diff(new Date(),'hours');
            if(diff>3){
                logoutUser();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            logoutUser();
            return false;
        }
    }
    else {
        return false;
    }
}
}
export const logoutUser = () => {
    return localStorage.removeItem('user_details');
}
export const getUser = () => {
    if (typeof window !== 'undefined') {
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem('user_details'));
    }}
}
export const user = () => {
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem('user_details'));
    }
}
export const loginUser = (user) => {
    const expiry = moment(new Date()).add(length,'hours');
    user.expiry = expiry;
    return localStorage.setItem('user_details',JSON.stringify(user));
}