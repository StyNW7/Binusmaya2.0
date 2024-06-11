// Slider

const signUpButton = document.getElementById('signUp');

const signInButton = document.getElementById('signIn');

const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});

// Sign In Button

const loginAcc = document.getElementById('loginAcc');

loginAcc.addEventListener("click", () => {

    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;

    if (email == "stanley.n.wijaya7@gmail.com" && password == "stanleyLibrarium"){

        // Developer Section

        console.log("Welcome Dev :)")

        window.open("../index.html");
        

    }

    else if (email == "customer@gmail.com" && password == "ELibrariumCustomer"){

        // Customer Section

        console.log("Hai Customer")

    }

    else {
        console.log("Who're You?")
    }

})



// Sign Up Button

const createAcc = document.getElementById('createAcc');