acount1 = {
    balance:0,
    transaction: function(amount){
        this.balance += amount;
    }
}
acount2 = {
    balance: 0,
    transaction: function(amount){
        this.balance += amount;
    }
}

function PerformTransaction(amount){
    this.balance += amount;
}



PerformTransaction.call(acount1, 100);
PerformTransaction.call(acount2, 200);

Fiftyinsavings = bind(PerformTransaction, acount1, 50);
Fiftyinsavings();

