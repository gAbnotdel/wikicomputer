function setAmount(value) {
  document.getElementById("customAmount").value = value;
}

function donate() {
  let input = document.getElementById("customAmount");
  let amount = input.value;
  
  if (amount === "" || Number(amount) <= 0) {
    alert("Please enter a valid donation amount.");
  } else {
    alert("Thank you for donating $" + amount + " to PCwiki!");
  }
}
