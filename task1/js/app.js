// html üçün

const inpValue = document.querySelector('#inpValue');
const checkBtn = document.querySelector('#checkBtn');
const displayMessage = document.querySelector('#displayMessage');


eventListeners();

function eventListeners() {
    checkBtn.addEventListener('click', checkInpValue);
}


function checkInpValue() {
    let value = inpValue.value;
    let len = value.length;
    let start = value.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = value.substring(len - Math.floor(len / 2)).toLowerCase();
    let reverseEndValueOfValue = [...end].reverse().join('');

    if (start == reverseEndValueOfValue) {
        if (displayMessage.classList.contains('danger')) {
            displayMessage.classList.remove('danger')
        }
        displayMessage.classList.add('success')
        displayMessage.innerHTML = `${value} is Palindrome`
    } else {
        if (displayMessage.classList.contains('success')) {
            displayMessage.classList.remove('success')
        }
        displayMessage.classList.add('danger')
        displayMessage.innerHTML = `${value} is not Palindrome`
    }

}



// sadəcə Javascript üçün


function checkPalindrome(value) {
    let len = value.length;
    let start = value.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = value.substring(len - Math.floor(len / 2)).toLowerCase();
    let reverseEndValueOfValue = [...end].reverse().join('');

    if (start == reverseEndValueOfValue) {
        console.log('palindrome')
    } else {
        console.log('not palindrome')
    }

}


