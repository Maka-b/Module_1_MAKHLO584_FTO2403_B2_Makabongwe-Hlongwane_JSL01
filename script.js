function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const phase1 = 'pet_'
    let loopNumber = -1
    let valid = ''
    let numberCheck = ''
    let numberInt = ''

    for (let i = 0; i < 4; i++) {
        loopNumber += 1
        
        if (phase1[i] == input[i] ) {
            valid += input[i]
        } 
    }

   // console.log(valid)
    
//Date check

    for (let i = 4; i < 8; i++ ) {
        numberCheck += input[i]
    }

    //convert into a number
    numberInt = parseInt(numberCheck)
    
    
    if ( numberInt === NaN) {
        console.log("Nooo")
    } else if (typeof numberInt === "number") {
        console.log(numberInt)
    }
    

    
        


    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


