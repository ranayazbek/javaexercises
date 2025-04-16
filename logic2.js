class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.transactionHistory = [];
    // time complexity is O(1) for each operation
  }

  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.push(`Deposited $${amount}`);
    return this.balance;
    // time complexity is O(1) for each operation
  }

  withdraw(amount) {
    if (amount < 0) {
      console.log("Withdrawal amount must be positive");
    }
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      this.transactionHistory.push(`Withdrew $${amount}`);
      return this.balance;
    // time complexity is O(1) for each operation
    }
  }

  transferTo(account, amount) {
    if (amount < 0) {
      console.log("Transfer amount must be positive");
    }
    if (amount > this.balance) {
      console.log("Insufficient funds for transfer");
    } else {
      this.withdraw(amount);
      account.deposit(amount);
      this.transactionHistory.push(`Transferred $${amount} to ${account.name}`);
      account.transactionHistory.push(`Received $${amount} from ${this.name}`);
      // time complexity is O(1) for each operation
    
    }
  }
  getSummary(){

    const summary= ` ${this.name}'s balance is $${this.balance}`;
    console.log(summary);
    return summary;
    // time complexity is O(1) for each operation
  }
  printHistory() {
    console.log(`Transaction history for ${this.name}:`);
    for (let i = 0; i < this.transactionHistory.length; i++) {
      console.log(this.transactionHistory[i]);
      // time complexity is O(n) where n is the number of transactions
    }
  }
} 

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.transferTo(acc2, 200); 
acc1.getSummary(); 
acc2.getSummary(); 
acc1.printHistory();
acc2.printHistory();


