export const CHANGE_ADVERTISING = 'CHANGE_CHANGE_ADVERTISING';

export function changeAdvertisingInformation(advertisingData){



    return {
        type :  CHANGE_ADVERTISING,
        data : advertisingData.data
    };
}
