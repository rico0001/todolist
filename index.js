window.onload = function () {
  readLocalStoragevalues(); // make the function call in the ONLOAD to fill in the valueas as soon as the page renders
  console.log("Js Connected");
  console.log("ERROR");
};

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function sendRequest() {
  const name = document.getElementById("name"); // get input element

  const nameVal = name?.value; // get input element value

  const phone = document.getElementById("Phone-Number");

  const phoneVal = phone?.value;

  const date = document.getElementById("date");

  const dateVal = date?.value;

  const time = document.getElementById("time");

  const timeVal = time?.value;

  const Description = document.getElementById("Description");

  const DescriptionVal = Description?.value;

  const myCheck = document.getElementById("myCheck");

  const myCheckVal = myCheck?.checked;

  // console.log(phoneVal)
  // research on how if statements work
  //loop through your object to check for empty values
  //if any value is empty alert user to fill in all the fields
  //if all values return a vali value alert the user form submission was a sucesss

  const object = {
    name: nameVal,
    phone: phoneVal,
    date: dateVal,
    time: timeVal,
    Description: DescriptionVal,
    myCheck: myCheckVal,
  };

  let validity = false; // decalre validity as false by deafult

  // an or statement will always reaturn one or both true value
  // an and statement will always return both true or both false values

  for (const key in object) {
    // get key form our object
    if (object[key] === "" || object[key] === false) {
      validity = false;
    } else {
      validity = true;
    }
  }

  if (validity === true) {
    window.alert("Form Submision was a success");
    // window.location.href = "login.html";
  } else {
    window.alert(`PLease Fill in the field`);
  }
  console.log(object);

  localStorage.setItem(object);

  window.alert("Form Submission Successful");
}

function buildLoginLink() {
  window.location.href = "login.html";
}

function register() {
  const name = document.getElementById("name"); // get input element
  const nameVal = name?.value;

  const phonenumber = document.getElementById("phonenumber");
  const phonenumberVal = phonenumber?.value;

  const email = document.getElementById("email");
  const emailVal = email?.value;

  const password = document.getElementById("password");
  const passwordVal = password?.value;

  const Confirmpassword = document.getElementById("Confirmpassword");
  const ConfirmpasswordVal = Confirmpassword?.value;

  // Register object
  const Register = {
    name: nameVal,
    phonenumber: phonenumberVal,
    email: emailVal,
    password: passwordVal,
    Confirmpassword: ConfirmpasswordVal,
  };

  let validity = false; // Start assuming the form is valid

  for (const key in Register) {
    // Check if any field is empty
    if (Register[key] === "") {
      validity = false; // Set validity to false if any field is empty
    } else {
      validity = true;
    }
  }

  // Ensure password and Confirmpassword are defined and matched
  const validatePas = Register.password;
  const validateCpass = Register.Confirmpassword;

  if (validity) {
    if (validatePas === validateCpass) {
      console.log(`Form Submission was a success with matching passwords.`);
      window.location.href = "login.html";
    } else {
      window.alert("Form Submission was a success but passwords do not match.");
    }
  } else {
    window.alert("Form Submission failed due to empty fields.");
  }

  console.log(Register);

  const registerString = JSON.stringify(Register);

  // const userName = "Eric";
  // const userId = 10;

  // const userData = {
  //   userName: userName,
  //   userId: userId,
  // };

  // const parsedUserData = JSON.parse(userData);

  localStorage.setItem("Register-Object", registerString);
  // localStorage.setItem("user", parsedUserData);

  console.log(
    "this is the recieved Values from our local storage",
    storedValue
  );
}

function readLocalStoragevalues() {
  const retrievedValues = localStorage.getItem("Register-Object"); // get vakues from local storage by pinting to the key which will return our value
  const parsedValues = JSON.parse(retrievedValues); // parse the object from a string state to a JSON state
  console.log("retrieved values from local storage", parsedValues); // log and visualize the data

  const email = parsedValues?.email; //get email value from the parsed values and do a null check
  const password = parsedValues?.password; // get the password value from the parsed object and do a null check

  const emailInput = document.getElementById("login-email"); // get the email input in the front end
  const passInput = document.getElementById("login-password"); // get the password input from the front end

  emailInput.value = email; // patch in the value from the parsed values to out front end email input
  passInput.value = password; // patch in the value from the parsed values to our front end password input

  if (emailInput && passInput === "") {
    console.log("error reading values please try again");
  }
  {
    //redirect to wherever as long as we have the values
    // window.location.href = "contact.html";
    // document.getElementById("sign-in").addEventListener("click", function () {
    // window.location.href = "contact.html";
    // });
  }
}
