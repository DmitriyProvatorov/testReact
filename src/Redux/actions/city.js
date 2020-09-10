export const CHANGE_CITY = 'CHANGE_CITY';

export function changeCity(cityData){



    return {
        type :  CHANGE_CITY,
        cityData
    };
}
