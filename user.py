class User: 
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    
    def make_deposit(self, amount):
        self.account_balance += amount
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    
    def display_user_balance(self):
        print("User: ", self.name ,", Balance: ", self.account_balance)
    
    def transfer_money(self, other_user, amount): 
        other_user.make_deposit(amount)
        self.account_balance -= amount



diamond = User("Diamond Stephens", "diamond@me.com")
paige = User("Paige Roberts", "paige@me.com")
raven = User("Raven Dyer", "raven@me.com")

diamond.make_deposit(100)
diamond.make_deposit(200)
diamond.make_deposit(500)
diamond.make_withdrawal(100)
diamond.display_user_balance()

paige.make_deposit(500)
paige.make_deposit(600)
paige.make_withdrawal(200)
paige.make_withdrawal(100)
paige.display_user_balance()

raven.make_deposit(800)
raven.make_withdrawal(100)
raven.make_withdrawal(50)
raven.make_withdrawal(100)
raven.display_user_balance()

diamond.transfer_money(raven, 100)
diamond.display_user_balance()
raven.display_user_balance()
