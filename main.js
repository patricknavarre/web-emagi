
const submitButton = document.querySelector('#submit-button');


const userSubmit = () => {
    const userInput = document.querySelector('#emagi-input').value;
    const userOutput = document.querySelector('#results');
    const radioButton = document.querySelector('.radio-button');
    
// *****Helper-Function for Buttons*****//

    const radioButtonCheck = (pressed) => {
        let pressedButton = '';
        for (const button of document.querySelectorAll('.radio-button')){
            if(button.checked === true){
                pressedButton = button;
            }
        }
        return pressedButton;
    }


    const buttonSwitch = radioButtonCheck(radioButton).value;

    switch (buttonSwitch) {
        case "encode":
            userOutput.innerText = encode(userInput);
            break;
        case "translate":
            userOutput.innerText = translate(userInput);
            break;
        case "madlib":
            userOutput.innerText = madlib(userInput);
            break;
        case "search":
            userOutput.innerText = search(userInput);
            break;
        case "random":
            console.log(getCategory(userInput));
            break;
    }
}
submitButton.addEventListener('click', radioButtonCheck)
