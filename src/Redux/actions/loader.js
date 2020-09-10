export const SET_LOADER = 'SET_LOADER';
export const REMOVE_LOADER = 'REMOVE_LOADER';



export function removeLoader(data){

    return {
        type : REMOVE_LOADER ,
        data : null
    };
}

export function setLoader(){



    return {
        type : SET_LOADER,
        data :null,

    };
}

