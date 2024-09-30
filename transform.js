// This is a separate document for testing the exact same function from the main file.

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
module.exports = transform;