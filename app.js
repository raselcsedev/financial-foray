function getInput(amount, total, isAdd){
    const inputField = document.getElementById(amount +'-field');
    const inputText= inputField.value;
    const inputValue = parseFloat(inputText);
    const totalBalance = document.getElementById('total-'+ total);
    const currentBalance = parseFloat(totalBalance.innerText);
    if(isAdd == true){
        const newBalance = currentBalance + inputValue;
    totalBalance.innerText = newBalance;
    // inputField.value = '';

    }
    else{
        const newBalance = currentBalance - inputValue;
        totalBalance.innerText = newBalance;
    // inputField.value = '';
    }
    

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('income', 'balance', true);
    
    
    
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('food', 'balance', false)
    
    
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('rent', 'balance', false)
    
    
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('cloth', 'balance', false)
    
    
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('food', 'expence', true)   
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('rent', 'expence', true)   
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    getInput('cloth', 'expence', true)   
})

