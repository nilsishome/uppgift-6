// My JS code.

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener(
    'click',
    () => {
        const text = input.value;
        transform(text);
        input.value = '';
    }
);

input.addEventListener(
    'keypress',
    e => {
        if (e.key === 'Enter')
        {
            const text = input.value;
            transform(text);
            input.value = '';
        }
    }
);

const transform = text => {
    return new Promise((resolve, reject) => {
        if (!text) 
        {
            reject('Empty string');
            console.log('Empty string');
            return;
        }
        else
        {
            resolve(text.toUpperCase());
            console.log(text.toUpperCase());
            
        } 
    });
};