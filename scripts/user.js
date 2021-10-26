let regForm = document.querySelector(".register-form");

let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

let validatePass = (pass) => {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(String(pass));
};

// Login
let validateLogin = () => {
    let email = document.forms["login-form"]["email"].value;
    let password = document.forms["login-form"]["password"].value;

    if (!email || !password) {
        alert("Email & password must be filled out");
        return false;
    }
    else {
        alert("Login success!");
        return true;
    }
};

// Register
let validateRegister = () => {
    let name = document.forms["register-form"]["name"].value;
    let email = document.forms["register-form"]["email"].value;
    let gender = document.forms["register-form"]["gender"].value;
    let city = document.forms["register-form"]["city"].value;
    let password = document.forms["register-form"]["password"].value;
    let confirmPass = document.forms["register-form"]["conf-password"].value;

    console.log(name, email, gender, city, password, confirmPass);

    if (!name) alert("Name must be filled");
    else if (!validateEmail(email)) alert("Email must be filled with the right format");
    else if (!gender) alert("Gender must be filled");
    else if (!city) alert("City must be filled");
    else if (!validatePass(password)) alert("Password must be filled with the right format (min 8 character that consist of 1 capital letter and 1 number)");
    else if (password !== confirmPass) alert("Password confirmation failed, please fill in the password confirmation again");
    else {
        alert("Register Sucess!");
        return true;
    }
    return false;
};

// regForm.addEventListener("submit", validateRegister);