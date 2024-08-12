const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const telephoneCheck = (str) => {
    const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
    return phoneRegex.test(str);
  }

const checkInput = () => {
    const userInputValue = userInput.value;
    if(userInputValue === '') {
        alert('Please provide a phone number');
        return;
    }
    if(telephoneCheck(userInputValue)) {
        resultsDiv.innerText = `Valid US number: ${userInputValue}`;
    } else {
        resultsDiv.innerText = `Invalid US number: ${userInputValue}`;
    }
}

checkBtn.addEventListener('click', () => {
    checkInput();
    userInput.value = '';
  });
  
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkInput();
      userInput.value = '';
    }
  });
  
  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
  });

  