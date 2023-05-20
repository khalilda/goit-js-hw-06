function letMeSeeYourName (callback) {
    const userName = prompt("Write your name");
    // console.log(userName);
    if (userName) {
        return callback (userName);
    }
}


function greet(name) {
    console.log(`Hi ${name}`)
}

letMeSeeYourName(greet);