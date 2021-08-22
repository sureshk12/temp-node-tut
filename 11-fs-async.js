//File Module Asynchnorous

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;
        writeFile('./content/result-async.txt', `This is write async file : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    });
});
