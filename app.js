function errorMessasge(){
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const incomeField = document.getElementById('income-field').value;
        const failedMessage = document.getElementById('notify-failed');
        if(isNaN(incomeField)==true){
            failedMessage.style.display='block';

        }
        

    })
}
errorMessasge();

function getInput(amount, total, isAdd){
    const inputField = document.getElementById(amount +'-field');
    const inputText= inputField.value;
    const inputValue = parseFloat(inputText);
    if(inputValue>0){ 
    const totalBalance = document.getElementById('total-'+ total);
    const currentBalance = parseFloat(totalBalance.innerText);
    if(isAdd == true){
        const newBalance = currentBalance + inputValue;
    totalBalance.innerText = newBalance;
    inputField.value = '';

    }
    else{
        const newBalance = currentBalance - inputValue;
        totalBalance.innerText = newBalance;
    // inputField.value = '';
    }
    }
    

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('income', 'balance', true);
    getInput('food', 'balance', false);
    getInput('rent', 'balance', false);
    getInput('cloth', 'balance', false);
    getInput('food', 'expence', true);
    getInput('rent', 'expence', true);
    getInput('cloth', 'expence', true);



    
    
})
