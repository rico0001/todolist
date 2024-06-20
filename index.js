window.onload = function () {
  console.log("Js Connected");
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

  if (nameVal === "") {
    window.alert("Please Fill in all the fields");
  }

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

  console.log(object);

  //localStorage.setItem(object);

  // window.alert("Form Submission Successful");
}

function buildloginLink() {
  window.location.href = "login.html";
}
