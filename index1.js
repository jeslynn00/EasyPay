var objPeople = [
    {
        email: "sam@gmail.com",
        password: "password1"
    },
    {
        email: "john@gmail.com",
        password: "password2"
    },
    {
        email: "benny@gmail.com",
        password: "password3"
    },
]

// login functionality
function login() {
    // retrieve data input from the form
    var email = document.getElementById("email").value 
    var password = document.getElementById("password").value

    // loop through all user objects and confirm if username n password are correct
    for (i=0; i < objPeople.length; i++) {
        if (email == objPeople[i].email && password == objPeople[i].password) {
            
            alert(email + " is logged in !")
            submit_button()
            function submit_button() {
                var btn = document.getElementById("btn1");
                btn.setAttribute('type','submit');
            }
        
            return
        }
    }


    // error if username n password dont match
    alert("incorrect username or password")
}


function registeruser() {
    var registeremail = document.getElementById("newemail").value 
    var registerpassword = document.getElementById("newpassword").value
    // var repeatpassword = document.getElementById("password-repeat").value
    var registeruser = {
        email: registeremail,
        password: registerpassword
    }

    for (i=0; i < objPeople.length; i++) {
        if (registerpassword.length < 8) {
            alert("Your password is too short, include 8 or more characters")
            return
        }
    }

    objPeople.push(registeruser)
    console.log(objPeople)
    

}


function authenticated() {
    setTimeout(a,7000)
    function a() {
        alert("Successfully authenticated with Singpass :D account has been created , please log in.")
    }
}