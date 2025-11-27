function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        resolve('Kamu berhasil!');
    }, 5000);
};

function doSomething() {
    return new Promise(promiseExecutor);
};

// no connection with iterable.mjs and func.mjs. But connection with chaiing.js