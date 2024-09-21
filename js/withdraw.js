document
  .getElementById("Withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputFieldValueById("withdraw-input");
    const pinNumber = getInputFieldValueById("Withdraw-pin-input");
    if (isNaN(amount)) {
      alert("Failed to Withdraw money");
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance - amount;
      document.getElementById("account-balance").innerText = newBalance;
      document.getElementById("current-balance").innerText = newBalance;

      const p = document.createElement("p");
      p.innerText = `Withdraw: ${amount} Tk. New Balance: ${newBalance}`;
      // should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to Withdraw money");
    }
  });
