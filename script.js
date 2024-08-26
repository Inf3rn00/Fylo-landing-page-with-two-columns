const form1 = document.querySelector("#form-1");
const form2 = document.querySelector("#form-2");
const errorMsg = document.getElementById("error-message")
// const btn1 = document.querySelector(".button-one");
// const btn2 = document.querySelector(".button-two");
const email = document.getElementById("email-1")
const email2 = document.getElementById("login-footer")
const errorMsg2 = document.getElementById("error-message2")

const regex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


form1.addEventListener("submit", (e) => {
    e.preventDefault();
   validateInput1();
});

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput2();
});


const validateInput1 = () => {
    const emailInput = email.value
    const isValid = regex.test(emailInput);
  
    if (emailInput === "") {
      errorMsg.innerText = "Enter a valid email address";
      errorMsg.style.color = "red"
      email.style.border = "solid 1px red"
      
    } else if (!isValid) {
      errorMsg.innerText = "Invalid email format, please try again";
      errorMsg.style.color = "red";
      email.style.border = "solid 1px red"
      email.value = ""

    } else{
      errorMsg.innerText = "Email is valid!";
      errorMsg.style.color = "green"
       email.style.border = "solid 1px green"
    }
  };

  const validateInput2 = () => {
    const emailInput = email2.value
    const isValid = regex.test(emailInput);
  
    if (emailInput === "") {
      errorMsg2.innerText = "Enter a valid email address";
      errorMsg2.style.color = "red"
      email2.style.border = "solid 1px red"
    } else if (!isValid) {
      errorMsg2.innerText = "Invalid email format, please try again";
      errorMsg2.style.color = "red";
      email2.style.border = "solid 1px red"
      email2.value = ""
    } else{
      errorMsg2.innerText = "Email is valid!";
      errorMsg2.style.color = "hsl(0, 0%, 75%)"
       email2.style.border = "solid 1px hsl(0, 0%, 75%)"
    }
  };

  