function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const phase1 = 'pet_'
    let valid = ''
    let numberCheck = '' //phase2
    let numberInt = '' 
    let alphabetList = /^[a-zA-Z]+$/;
    let alphaCheck ='' //phase3

    let num = false
    let pet = false
    let alph = false
    
    
// 'pet_' check
    for (let i = 0; i < 4; i++) {
        
        
        if (phase1[i] == input[i] ) {
            valid += input[i]
        } 
        if (valid = input){
            pet = true
        }
    }

    console.log(valid)
    
// Phase 2 Date check

    for (let i = 4; i < 8; i++ ) {
        
        numberCheck += input[i]
   
    }
    //convert into a number
    numberInt = parseInt(numberCheck) 

    if ( isNaN(numberCheck) ) {
        alert(" Not a valid date ")
        
    } else {
        num = true
    }

// hase 3  AlpaNum check
    for (let i = 8; i < input.length ; i++ ) {
        
        alphaCheck += input[i]
   
    }
    if (alphabetList.test(alphaCheck) && alphaCheck){
        alph = true
    }
    
    if (!alphaCheck) {
        alert ("No Name added ")
    }
    
    if (alph && num && pet) {
        result = "Valid Syntax"
    }else {
        result = "Invalid Syntax"
    }
    
    
    
    

    
    


    

    
        


    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


