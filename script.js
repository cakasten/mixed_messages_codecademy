const messages = ['I see a flat tire.', 'Big furtunes ahead.', 'Pasta for dinner!', 'Views of the alps.', 'High kd.', 'old friends.', 'visions of debt.', 'Tomorrow is monday.', 'Where did your phone go?'];

const future = [];

const tellFuture = () => {
    for (let i = 0; i < 3; i++) {
        future.push(messageLine = messages[Math.floor(Math.random() * messages.length)])
    }
}

tellFuture();

sendMessage = () => {
    future.forEach(element => {
        alert(element);
    });
}