const generateIt = () => {
  // parseInt is converting strings into numbers. parseFloat allows for decimals.

  //const fullName = "Alexandra Maracinaru";
  const inputText = document.querySelector("#input").value;
  const optionBox = document.querySelector("#dropdown").value;
  const result = document.querySelector("#output");
  let outcome;

  if (optionBox === "q1") {
    const firstLetter = inputText.substring(0, 1).toUpperCase();
    const remainingLetters = inputText.substring(1).toLowerCase();
    outcome = firstLetter + remainingLetters;
    console.log(outcome);
  } else if (optionBox === "q2") {
    const firstSpace = inputText.indexOf(" ");
    const firstName = inputText.substring(0, firstSpace);
    outcome = firstName;
  } else if (optionBox === "q3") {
      const theFirstName = inputText.length[0]
  }

  }
  result.value = outcome;
};
document.querySelector("#generate").addEventListener("click", generateIt);