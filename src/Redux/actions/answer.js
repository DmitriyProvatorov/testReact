export const CHANGE_ANSWER = 'CHANGE_ANSWER';

export function changeAnswer(answer){



    return {
        type : CHANGE_ANSWER,
        answer
    };
}
