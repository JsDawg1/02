
    const whiteDiv = document.querySelector('.whiteDiv');
    const thanksDiv = document.querySelector('.thanksDiv');
    const submitForm = document.querySelector('#submitForm');
    const submitThanks = document.querySelector('#submitThanks');
    const emailInput = document.querySelector('#emailInput');
    const thanksModifyP = document.querySelector('#thanksModifyP');
    const mail = document.querySelector('#mailInsert');

    // Function to show the thanksDiv and hide the whiteDiv

    function showThanksDiv() {
        mail.innerText = `${emailInput.value}`;
        whiteDiv.style.display = "none";
        thanksDiv.style.display = "block"
    }

    function showWhiteDiv(){
         
        whiteDiv.style.display = "flex";
        thanksDiv.style.display = "none";
    }
    // Add event listeners to the buttons
    submitForm.addEventListener('click', showThanksDiv);
    submitThanks.addEventListener('click', showWhiteDiv);
