import {CHANGE_URL} from '../actions';

const listFilters = ['forget_password', 'login', 'registration', 'cabinet', 'view_data'];
const ratingFilters = ['forget_password', 'login', 'registration', 'cabinet', 'view_data'];


function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}


function reducer(state = {
    type: "",
    region : "",
    city: "",
    problem: ""

}, action){

    let getParams;



    switch (action.type){



        case CHANGE_URL :



            let list = window.location.pathname.split("/");



            getParams = parse_query_string(window.location.pathname);
            if(getParams.referal){

                setCookie('referal', getParams.referal, {});
            }



            let retObj ={
                service: list[1],
                typePage : list[2],
                pathname: window.location.pathname


            };

            list.shift();

            retObj.list = list;

            retObj.flags = {
                showFilters : !(listFilters.includes(list[0]) ),
                showRatings : !(ratingFilters.includes(list[0]) )


            };








            return retObj;








        default:





            let path = window.location.pathname.split('/');
            getParams = parse_query_string(window.location.pathname);
            if(getParams.referal){

                setCookie('referal', getParams.referal, {});
            }

            let _retObj ={
                service: path[1],
                typePage : path[2],
                pathname: window.location.pathname


            };

            path.shift();

           // _retObj.list = list;

            _retObj.flags = {
                showFilters: !(listFilters.includes(path[0])),
                showRatings: !(ratingFilters.includes(path[0]))
            }


            return _retObj;

    }

};

export default reducer;
