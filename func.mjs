import { doSomething } from "./iterables.mjs";

function onPromise(doSomethingData) {
    console.log(doSomethingData);
}
function onRejected(doSOmethingError) {
    console.log(doSOmethingError);
}

doSomething().then(onPromise, onRejected);
// .then() merupakan suatu method khusus dari promise.
// dia fungsinya menangani dan menerima proses dari hasil asinkron.