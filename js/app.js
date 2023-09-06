const submitBtn = document.getElementById('submit');

const resultType = document.getElementById('result');
let numberOfTry = 0;

const triedOutpurId = document.getElementById('last-try');
const placeNumberOfTry = document.getElementById('number-of-try')
const resultImoj = document.getElementById('resultImoj');
const restartAlertId = document.getElementById('ReStart-alert');
// ganarete randome number
function getRandomNumber() {
    return Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100 (inclusive)
}
const randomNumber = getRandomNumber();
console.log(randomNumber)

// submit your guess
submitBtn.addEventListener('click', function () {
    const guessField = document.getElementById('numberField');
    const guessString = guessField.value;
    const numberOutput = parseInt(guessString)
    triedOutpurId.innerText = numberOutput;
    //
    numberOfTry++;
    placeNumberOfTry.innerText = numberOfTry;
    //
    if (numberOutput === randomNumber) {
        resultImoj.innerHTML = `<span>😘 </span> <span> ${randomNumber}</span>`;
        resultType.innerText = `Excilent`;
        submitBtn.setAttribute('disabled', true);
        setTimeout(() => {
            restartAlertId.classList.remove('d-none')
        }, 1000 * 1.5);
    } else if (numberOutput > randomNumber) {
        resultImoj.innerHTML = `⌚`;
        resultType.innerText = `Try a smaller number`;
        resultType.style.fontSize = '2.5rem';
    } else if (numberOutput < randomNumber) {
        resultImoj.innerHTML = `⌚`;
        resultType.innerText = `Try a larger number`;
        resultType.style.fontSize = '2.5rem';
    }
    //
    if (numberOfTry === 10 && numberOutput !== randomNumber) {
        const enoghId = document.getElementById('enogh');
        enoghId.classList.remove('d-none');
        submitBtn.setAttribute('disabled', true);
    }
    //
    guessField.value = '';
});
// ReStart button
document.getElementById('reset').addEventListener('click', function () {
    location.reload()
})
