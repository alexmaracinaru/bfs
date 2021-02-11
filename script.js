const generateIt = () => {
  //const fullName = "Alexandra Maracinaru";
  const inputText = document.querySelector("#input").value;
  const optionBox = document.querySelector("#dropdown").value;
  const result = document.querySelector("#output");
  let outcome;
  let hidePassword = "*";

  const firstSpace = inputText.indexOf(" ");
  const lastSpace = inputText.lastIndexOf(" ");
  const firstName = inputText.substring(0, firstSpace);
  const firstNameLength = firstName.length;
  const middleName = inputText.substring(firstSpace + 1, lastSpace);
  const lastName = inputText.substring(lastSpace + 1);

  if (optionBox === "q1") {
    const firstLetter = inputText.substring(0, 1).toUpperCase();
    const remainingLetters = inputText.substring(1).toLowerCase();
    outcome = firstLetter + remainingLetters;
    console.log(outcome);
  } else if (optionBox === "q2") {
    outcome = firstName;
  } else if (optionBox === "q3") {
    outcome = firstNameLength;
  } else if (optionBox === "q4") {
    outcome = firstSpace + (lastSpace + middleName);
  } else if (optionBox === "q5") {
    //if (intupText.endWith('.jpg'),('.png)) ? Is this possible? How do I find out?!
    //if (inputTEXT.endsWith('.jpg')) or/and? (inputTEXT.endsWith('.jpg')) = true...
    /* if (inputText.endsWith('.jpg', '.png') {
    outcome = true;
    } else {
      outcome = false;
    } */
    if (inputText.endsWith(".jpg")) {
      outcome = ".jpg";
    } else if (inputText.endsWith(".png")) {
      outcome = ".png";
    } else {
      outcome = "not a pic"; // what should this be?
    }
  } else if (optionBox === "q6") {
    outcome = hidePassword.repeat(inputText.length);
  } else if (optionBox === q7) {
    outcome = inputText.substring(2, 3).toUpperCase();
  } else if (optionBox === q8) {
    if (inputText.includes(" ") || inputText.includes("-")) {
      let space = " ";
      let hyphen = "-";

      outcome =
        inputText.substring(hyphen + 1).toUpperCase() +
        inputText.substring(space + 1).toUpperCase();
    }
  }
  result.value = outcome;
};
document.querySelector("#generate").addEventListener("click", generateIt);
