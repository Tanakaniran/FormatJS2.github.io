import { doSomething } from "./iterables.mjs";

async function promiseWithAsycAwait() {
    try {
        console.log('start');

        const result = await doSomething();
        console.log(result);
        console.log('End');
    } catch (error) {
        console.log(error.message);
    }
};

promiseWithAsycAwait();