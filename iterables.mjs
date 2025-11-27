export function filledExecutor(resolve, reject) {
    setTimeout(() => {
        console.log('Proses dieksekusi sebelum asinkron');

    const randomNumber = Math.random();
    if(randomNumber > 0.5) {
        resolve('Kamu berhasil!');
    }
    else{
        reject('kesalahan terdeteksi');
    }
    }, 5000 /*milidetik*/)
};

export function doSomething() {
    return new Promise(filledExecutor);
}