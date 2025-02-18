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

function electionResult(votes) {
  let mangoVote = [];
  let bananaVote = [];
  if (Array.isArray(votes)) {
    for (const eachVote of votes) {
      if (eachVote === "mango") {
        mangoVote.push(eachVote);
      } else if (eachVote === "banana") {
        bananaVote.push(eachVote);
      }
    }
  } else {
    return "Invalid";
  }

  if (mangoVote.length > bananaVote.length) {
    return "Mango";
  } else if (bananaVote.length > mangoVote.length) {
    return "Banana";
  } else {
    return "Draw";
  }
}

function isBestFriend(f1, f2) {
  if (
    typeof f1 !== "object" ||
    f1 === null ||
    Array.isArray(f1) ||
    typeof f2 !== "object" ||
    f2 === null ||
    Array.isArray(f2)
  ) {
    return "Invalid";
  } else if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
    return true;
  } else {
    return false;
  }
}
