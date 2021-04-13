
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAglyyyqzM0Mji52iKwAGBrAZiAUz2QX-s",
    authDomain: "form-a2fa1.firebaseapp.com",
    projectId: "form-a2fa1",
    storageBucket: "form-a2fa1.appspot.com",
    messagingSenderId: "195902252855",
    appId: "1:195902252855:web:13a5e6a3815250d9f55cb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp() {
 
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(function(){
  
        //Succesful, do whatever you want in your page 
        console.log("redirect")
        // wrongEmail.style.display = "none"
        alert("Account Succefully create, Proceed to Login")
        window.location.href = "dashboard.html";
     
      })





    // const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    // promise.catch(e => alert(e.message));

    

   
  }



  function signIn() {

 
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var wrongDetails = document.querySelector(".wrongDetails")

     if(email.value === '') {
        wrongDetails.style.display = "block";
         window.location = "form.html";;
         email.style.background = "red";
        

     } else if  (password.value === '') {
        wrongDetails.style.display = "block";
              window.location = "form.html";;
              password.style.background = "red";
 
    
     } 

     
    auth.signInWithEmailAndPassword(email.value, password.value)
    .then(function(){
  
        //Succesful, do whatever you want in your page 
        console.log("redirect")
        wrongDetails.style.display = "none"
        window.location.href = "dashboard.html";
     
      })



     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
   
   

    
     //Take user to a different homepage
    
  }
 

  
  function signOut() {

    auth.signOut();
    alert("Signed out");
    window.location.href = "form.html";
  }

  auth.onAuthStateChanged(function(user) {
    // const kobi = document.getElementsByClassName("kobi");
      if(user) {

        var email = user.email;
        alert("Active User " + email);
   
      
        //is signed in
    }
    //   } else {
        
    // // alert("No active user")
    //     //no user is signed in
    //   }

   
  });

  var togglePassword = document.querySelector('#togglePassword');
  var password = document.getElementById("password");

    togglePassword.addEventListener('click', function () {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });



///////////////TEST ////////////////

//NUMBER 3
const totalNumberOfRows = 5;
const output = "";
for (var i = 1; i <= totalNumberOfRows; i++) {
   for (var t = 1; t <= i; t++) {
      output += t + " ";
   }
   console.log(output);
   output = "";
}
