export const CHANGE_GROUP_DATA = 'CHANGE_GROUP_DATA';

export function changeGroopData(data){



    return {
        type : CHANGE_GROUP_DATA,
        data : data || {}
    };
}
