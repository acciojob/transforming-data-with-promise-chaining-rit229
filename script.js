//your JS code here. If required.
document.getElementById('btn').onclick = function() {
    const inputValue = parseInt(document.getElementById('ip').value);
    
    firstPromise(inputValue)
        .then(secondPromise)
        .then(thirdPromise)
        .then(fourthPromise)
        .then(fifthPromise);
};

function firstPromise(inputValue) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('output').innerText = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    });
}

function secondPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value * 2;
            document.getElementById('output').innerText = `Result: ${newValue}`;
            resolve(newValue);
        }, 2000);
    });
}

function thirdPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value - 3;
            document.getElementById('output').innerText = `Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    });
}

function fourthPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value / 2;
            document.getElementById('output').innerText = `Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    });
}

function fifthPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value + 10;
            document.getElementById('output').innerText = `Final Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    });
}