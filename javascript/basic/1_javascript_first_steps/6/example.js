const myPromise = new Promise((resolve, reject) => {
    if (condotion) {
        resolve('the promise is resolved')
    } else {
        reject('the promise is rejected')
    }

    myPromise.then(result => {
        console.log(result)
    });

    mypromise.catch(error => {

    });
});