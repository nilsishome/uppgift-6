// This is a separate document for testing the exact same function from the main file.

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
module.exports = transform;