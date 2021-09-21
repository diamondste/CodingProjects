
class User { 
    constructor(username, emailAddress){
        this.name = username 
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) { 
        this.accountBalance += amount
    }
    makeWithdrawal(amount) { 
        this.accountBalance -= amount
    }
    displayBalance() { 
        console.log("User:" + this.name, "Balance" + this.accountBalance)
        
    }

}

const tom = new User("Tom Cat", "tomcat@cat.com")
const jerry = new User("Jerry Mouse", "jerryMouset@mouse.com")
const piggy = new User("Ms Piggy", "lovekermit@piggy.com")

tom.makeDeposit(100)
tom.makeDeposit(200)
tom.makeDeposit(400)
tom.makeWithdrawal(100)
console.log(tom.accountBalance)

jerry.makeDeposit(200)
jerry.makeDeposit(100)
jerry.makeWithdrawal(100)
jerry.makeWithdrawal(50)
console.log(jerry.accountBalance)

piggy.makeDeposit(400)
piggy.makeWithdrawal(100)
piggy.makeWithdrawal(50)
piggy.makeWithdrawal(80)
console.log(piggy.accountBalance)
