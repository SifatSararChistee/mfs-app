document.getElementById("add-fund-btn").addEventListener("click", function () {
  showSectionById("add-money-form");
});

document
  .getElementById("Withdrawal-btn")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });

document
  .getElementById("Transaction-btn")
  .addEventListener("click", function () {
    showSectionById("transaction-container");
  });
