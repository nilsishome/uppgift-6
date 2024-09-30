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
    if (text == 0)
    {
        console.log('Empty string');
    }
    else
    {
        console.log(text.toUpperCase());
    }

    return new Promise((resolve, reject) => {
        if (text == 0) 
        {
            reject('Empty string');
            return;
        }
        else
        {
            resolve(text.toUpperCase());
            
        } 
    });
};