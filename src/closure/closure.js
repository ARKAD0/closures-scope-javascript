
function greeting() {
    let userName = 'Daniel';

    function displayUsername() {
        return `Hello ${userName}`;
    }
    return displayUsername;
}

const g = greeting();
console.log(g);
console.log(g());