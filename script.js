
document.getElementById('btn-submit').addEventListener('click', function(){
    const emaliField = document.getElementById('user-email');
    const email = emaliField.value;
    // console.log(email);

    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // console.log(password);

    // verify test
    if(email === 'abc@gmail.com' && password === 'ajaj'){
        window.location.href = 'bank.html'
    }
    else{
        alert("Wrong password and email!")
    }
})

// deposite section
