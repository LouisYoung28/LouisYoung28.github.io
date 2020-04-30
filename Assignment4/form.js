
function submitBtnClick() {

    var userName = document.getElementById("UName").value;
    var email = document.getElementById("Email").value;
    var phoneNum = document.getElementById("PhNum").value;
    var password1 = document.getElementById("EnterPass").value;
    var password2 = document.getElementById("ConfPass").value;

    showResults();
    validateEmptyInputs();
    regexTestResult = regexValidationTest(userName, email, phoneNum, password1, password2);


    /** All inputs are valid. Now check to see if the two passwords are the same.
     * Send to Github only when all inputs are valid and passwords match. **/
    if (password1 !== password2) {
        alert("Your passwords do not match!");
    }else if (regexTestResult === true){
        sendToGitHub();
    }

}

function regexValidationTest(userName, email, phoneNum, password1) {
    /** Validate if the user input fields are valid with regex comparisons. **/
    var rgCheckUserName = /^[a-z0-9]{4,12}$/g;
    var userNameResult = rgCheckUserName.test(userName);

    var containsAtSymbol = /.*[@].*/g;
    var correctSuffix = /.net$|.org$|.com$|.edu$/g;
    var userEmailResult = containsAtSymbol.test(email) && correctSuffix.test(email);

    var rgPhoneNum = /\d\d\d-\d\d\d-\d\d\d\d/g;
    var userPhoneNumResult = rgPhoneNum.test(phoneNum);

    var rgEnterPass = /([^0-9]*|[^A-Z]*|[^\w]*).{6,}/g;
    var userPasswordResult = rgEnterPass.test(password1);

    //Test Username input field
    if (userName === "") {
        document.getElementById("valUname").style.color = "red";
        document.getElementById("h3UserName").style.display = "block";
    }else if (userNameResult === false) {
        document.getElementById("h3UserName").style.display = "block";
        document.getElementById("valUname").style.color = "orange";
    }

    //Test Email input field
    if (email === "") {
        document.getElementById("valEmail").style.color = "red";
        document.getElementById("h3Email").style.display = "block";
    }else if (userEmailResult === false) {
        document.getElementById("h3Email").style.display = "block";
        document.getElementById("valEmail").style.color = "orange";
    }

    //Test Phone Number input field
    if (phoneNum === "") {
        document.getElementById("valPhnum").style.color = "red";
        document.getElementById("h3PhNum").style.display = "block";
    }else if (userPhoneNumResult === false) {
        document.getElementById("h3PhNum").style.display = "block";
        document.getElementById("valPhNum").style.color = "orange";
    }

    //Test Password input field
    if (password1 === "") {
        document.getElementById("valPwd").style.color = "red";
        document.getElementById("h3Pwd").style.display = "block";
    }else if (userPasswordResult === false) {
        document.getElementById("h3Pwd").style.display = "block";
        document.getElementById("valPwd").style.color = "orange";
    }

    if (userNameResult === true && userEmailResult === true &&
        userPhoneNumResult===true && userPasswordResult===true) {
        return true; //this function only returns true when all test have been validated.
    }
}

function validateEmptyInputs() {
    /** Validate if the user input fields for
     * checkboxes and radio buttons are empty. **/
    if (!document.getElementById("genF").checked &&
        !document.getElementById("genM").checked &&
        !document.getElementById("genO").checked) {
        document.getElementById("valGen").style.color = "red";
        document.getElementById("h3Gen").style.display = "block";
    }
    if (document.getElementById("Month").selectedIndex === 0 ||
        document.getElementById("Day").selectedIndex === 0 ||
        document.getElementById("Year").selectedIndex === 0) {
        document.getElementById("h3Bday").style.display = "block";
        document.getElementById("valBday").style.color = "red";
    }
}

function showResults(){
    /*display div to show validation results*/
    document.getElementById("myDiv").style.display = "block";
}

function sendToGitHub(){
    /** Navigate to my GitHub Homepage if all inputs are valid **/
    window.location.href="https://louisyoung28.github.io/";
}

function clearBtnClick() {
    document.getElementById("myForm").reset();
    document.getElementById("myDiv").style.display="none";
}
