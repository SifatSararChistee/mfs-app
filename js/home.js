document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputFieldValueById("amount-input");
    console.log(amount);
  });
