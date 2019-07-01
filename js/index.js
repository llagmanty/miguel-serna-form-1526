//call button
    let btn = document.getElementById("submit-button");
//call email to validate it
    let em = document.getElementById("email");
//call full name to validate it
    let fullname = document.getElementById("fullname");
//call message to validate it
    let message = document.getElementById("message");
//clear data from form
//1. access the form
    let form = document.querySelector("form");


    console.clear();
//event-handler
    function assignmentForm() {
    
// set all data and errors in an array
    let errors =[];
//this can be configured as let data = { emailProp: undefined}
    let data ={};
//validation code
    if (fullname.value === "") {
        errors.push("fn: \"Full name is missing\"");
        console.log();
    } else {
        data.name= fullname.value;
    }
//validation code
    if (em.value === "") {
        errors.push("em: \"Email is missing\"");
        console.log();
        } else {
            let regex= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (regex.test(em.value)) {
                    data.emailProp= em.value;
                } else {    
                    errors.push("em: \"Email is invalid\"");
                    console.log();
                }}
//validation code
    if (message.value === "") {
        errors.push("Message is missing");
        console.log();
    } else {
        data.messages= message.value;
    }
    
//create feedback
    if (errors.length===0) {
//clear your form 
        form.reset();
        console.log(`\{full name: ${data.name}, email: ${data.emailProp}, message:${data.messages}\}`);
        } else {
            console.log(`Errors:\{${errors}\}`);
        }
    }

//register even
    btn.addEventListener('click', assignmentForm);