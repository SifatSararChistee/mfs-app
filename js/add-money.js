document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputFieldValueById("amount-input");
    const pinNumber = getInputFieldValueById("amount-pin-input");
    if (isNaN(amount)) {
      alert("Failed to add money");
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = amount + balance;
      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("current-balance").innerText = newBalance;

      const p = document.createElement("p");
      p.innerText = `Added: ${amount} Tk. New Balance: ${newBalance}`;
      // should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money");
    }
  });
