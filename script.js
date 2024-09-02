
    const whiteDiv = document.querySelector('.whiteDiv');
    const thanksDiv = document.querySelector('.thanksDiv');
    const submitForm = document.querySelector('#submitForm');
    const submitThanks = document.querySelector('#submitThanks');
    const emailInput = document.querySelector('#emailInput');
    const thanksModifyP = document.querySelector('#thanksModifyP');

    // Function to show the thanksDiv and hide the whiteDiv

    function showThanksDiv() {
        thanksModifyP.innerText = `A confirmation email has been sent to your ${emailInput.value}. Please open it and click the button inside to confirm your subscription`
        whiteDiv.style.display = "none";
        thanksDiv.style.display = "block"
    }

    function showWhiteDiv(){
         
        whiteDiv.style.display = "block";
        thanksDiv.style.display = "none";
    }
    // Add event listeners to the buttons
    submitForm.addEventListener('click', showThanksDiv);
    submitThanks.addEventListener('click', showWhiteDiv);
