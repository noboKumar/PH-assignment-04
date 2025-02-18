function cashOut(money) {
  const chargeAmmount = (money * 1.75) / 100;

  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return chargeAmmount;
}

function validEmail(email) {
  const specialSymbol = [".", "-", "_", "+", "@"];
  if (typeof email !== "string") {
    return "Invalid";
  } else if (
    !specialSymbol.includes(email[0]) &&
    email[email.length - 1] !== "@" &&
    email.split("@").length - 1 === 1 &&
    !email.includes(" ") &&
    email.slice(email.length - 4) === ".com"
  ) {
    return true;
  } else {
    return false;
  }
}
