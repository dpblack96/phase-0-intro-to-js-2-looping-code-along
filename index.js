// Code your solutions in this file
function writeCards(names, typeOfGift) {
    let messages = []
    
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`
        console.log (message)
        messages.push(message)
    }
    return messages
}

function countDown() {
    let j = 10;
    while (j >= 0) {
        console.log (j);
        j--
    }
    return j
}