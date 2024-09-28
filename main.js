// My JS code.

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener(
    'click',
    transform
);

input.addEventListener(
    'keypress',
    e => (e.key === 'Enter') ? transform() : null
);

function transform()
{
    const text = input.value;

    if (text == 0)
    {
        console.log('Enter some text first!');
    }
    else
    {
        console.log(text.toUpperCase());
    }

    input.value = '';
}