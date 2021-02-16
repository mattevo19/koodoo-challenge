const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 50 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 3, // three months ago
    account: {
      balance: { amount: 150 },
    },
  },
  {
    monthNumber: 4, // four months ago
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 5, // five months ago
    account: {
      balance: { amount: 250 },
    },
  }
]

const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //

  // sortcut for the length of array
  const length = accountBalanceHistory.length;

  // the difference that account changes by each month
  const difference = (accountBalanceHistory[length - 1].account.balance.amount)-(accountBalanceHistory[length - 2].account.balance.amount);

  // for storaging the results of the loop
  let result = [];

  // comparision of the months pushing true to the array if the amount changes by the expected value
  for (let i = 0; i < length - 1 ; i++) {
    ((accountBalanceHistory[i].account.balance.amount + difference) == (accountBalanceHistory[i+1].account.balance.amount)) ? (result.push(true)) : (result.push(false));
  }

  return result.includes(false) ? "A" : "B";
};

console.log(accountTypeChecker(accountBalanceHistory));
