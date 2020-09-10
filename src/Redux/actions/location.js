export const CHANGE_URL = 'CHANGE_URL';


export function changePage(location){



    return {
        type : CHANGE_URL,
        location
    };
}

