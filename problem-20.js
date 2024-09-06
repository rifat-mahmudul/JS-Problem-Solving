/**
 * Create different variables, each containing either an array or a non-array value.

    Now use isArray to check if each variable is an array.

    Print a message to the console indicating whether each variable is an array or not.
 */

    const names = ['Rifat', 'Kona', 'Jihad'];
    const dream = 'I want to be a passionate programmer.'

    if(Array.isArray(names)){
        console.log('This is an array')
    }

    else{
        console.log("This is not an array.")
    }