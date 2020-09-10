export const GET_AUTH = 'GET_AUTH';
export const EXIT = 'EXIT';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';


let appStorage = window.localStorage;


let COOCIE_NAME = 'test_cookie';

function setStorage(name, value) {


    appStorage.setItem(name, value)

}

function deleteStorage(name) {

    appStorage.removeItem(name);
}

export function enterUser(data){




    if( data.header) {
        setStorage(COOCIE_NAME, data.header)
    }



    return {
        type : GET_AUTH,
        data : data.data
        };
}

export function exitUser(){

    deleteStorage(COOCIE_NAME)

    return {
        type : EXIT,
        data :null,
       
    };
}

export function changeUser(data){

    return {
        type : CHANGE_USER_DATA,
        data : data.data
    };
}
