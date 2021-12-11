const myPromise = new Promise((resolve, reject) => {
    if (condotion) {
        resolve('promise is resolved')
    } else {
        reject('promise is rejected')
    }

    myPromise.then(result => {
        console.log(result)
    })
});