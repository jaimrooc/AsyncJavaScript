let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlApi, true); // true = Async type
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) { // request finished and response is ready
                (xhttp.status === 200)  
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', urlApi))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData; // node js syntax