const doSomethinAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error(new Error('Test Error')))
    });
}

const doSomething = async () => {
    const something = await doSomethinAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethinAsync();
        console.log(something);
    } catch (error) {
        console.error(erro);
    }
}



console.log('Before2');
anotherFunction();
console.log('After2');