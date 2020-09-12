
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export function registrationUser(data){
    window.localStorage.setItem(data.email, data.password);
    return {
        type : 'CREATE_USER',
        data : data
        };
}
export function loginUser(data){

    return {
        type : 'LOGIN_USER',
        data : data
    };
}

