function cashOut(money) {
  const chargeAmmount = (money * 1.75) / 100;

  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return chargeAmmount;
}

