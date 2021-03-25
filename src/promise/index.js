const someTimesWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!');
        } else {
            reject('Upsss!');
        }
    });
};

someTimesWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const someTimesWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True!!');
            }, 2000)
        } else {
            const error = new Error('Upss!'); // Show stack trace
            reject(error);
        }
    });
}

someTimesWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))



Promise.all([someTimesWillHappen(),someTimesWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })