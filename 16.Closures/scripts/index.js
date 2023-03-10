/**
 * HAS FUNCTIONS OF BANK LIKE 1.VALIDATING ENTRY ---On passing the entry---> 2.ATM 3.CDM
 * @param {string} username 
 * @param {string} userpin 
 * @returns {object, function refernce} validAccountNumber, optionsInBank
 */
function validateEntry(username, userpin) {
    //Record of Banks Accounts
    let bankAccounts = [
        {
            accountNumber: "1234567890",
            cardNumber: "4111111111111110",
            PIN: "1234",
            accountBalance: 100.00,
            accountHolderName: "Account_Holder1"
        },
        {
            accountNumber: "1234567891",
            cardNumber: "4111111111111111",
            PIN: "2345",
            accountBalance: 100.00,
            accountHolderName: "Account_Holder2"
        },
        {
            accountNumber: "1234567892",
            cardNumber: "4111111111111112",
            PIN: "3456",
            accountBalance: 100.00,
            accountHolderName: "Account_Holder3"
        },
        {
            accountNumber: "1234567893",
            cardNumber: "4111111111111113",
            PIN: "4567",
            accountBalance: 100.00,
            accountHolderName: "Account_Holder4"
        },
        {
            accountNumber: "1234567894",
            cardNumber: "4111111111111114",
            PIN: "5678",
            accountBalance: 100.00,
            accountHolderName: "Account_Holder5"
        },
    ];

    //Verifying Validity of the user
    let validAccountNumber = findAccountNumber (username, userpin);
    /**
     * FETCHES THE INDEX (FOR VERIFYING IF THE USER BELONGS TO THE BANK), NAME OF ACCOUNT HOLDER 
     * @param {string} username 
     * @param {string} userpin 
     * @returns {number, string} index, username
     */
    function findAccountNumber(username, userpin){
        const index = bankAccounts.findIndex(account => (account.accountNumber==username && account.PIN==userpin));
        var userName="";
        if(index>-1) userName = bankAccounts[index].accountHolderName;
        return {index,userName};
    }

    /**
     * HAS OPERATIONS LIKE ATM, CDM
     * @param {number} option 
     * -Results are displayed with Alerts
     */
    function optionsInBank(option){
        let userAccountBalance = bankAccounts[validAccountNumber.index].accountBalance;
        //Withdraw money from ATM
        if(option==1){
            const amount = prompt("Enter the amount of money you want to withdraw");
            if(userAccountBalance>=amount){
                bankAccounts[validAccountNumber.index].accountBalance-=amount;
                alert("Please recieve the cash amount of Rs."+amount);
            }
            else{
                alert("Sorry! Your requested cash amount exceeded your account balance");
            }
        }
        //Depositing cash into Cash Deposit Machine
        else{
            const amount = parseInt(prompt("Enter the amount of money you want to deposit"));
            bankAccounts[validAccountNumber.index].accountBalance+=amount;
        }
        userAccountBalance = bankAccounts[validAccountNumber.index].accountBalance;
        alert("Your current account balance is Rs."+userAccountBalance);
    }

    //Returning the inner functions, thereby taking advantage of its closure (function with parent's lexical scope) to access the secret details 
    return {validAccountNumber, optionsInBank};
}


//STEP BY STEP PROCEDURE OF GETTING ACCESS TO BANK OPERATIONS
let username = prompt("Enter Your Account Number");
if(username) {
    let userpin = prompt("Enter Your User PIN");
    if(userpin) {
        let accountNumber = validateEntry(username, userpin);

        //VALID ACCOUNT HOLDER
        if(accountNumber.validAccountNumber.index >-1){
            alert("Welcome Mr/Ms/Mrs "+ accountNumber.validAccountNumber.userName);

            let option = prompt("Enter option 1 for ATM"+"\n"+"Enter option 2 for Cash Deposit Machine");

            //1 FOR ATM , 2 FOR CDM
            if(option==1 || option==2){
                accountNumber.optionsInBank(option);
            }

            //INVALID OPTION CHOSEN
            else{
                alert("Please enter a valid choice !");
            }
        }
        //INVALID USER
        else{
            alert("Sorry you got your credentials wrong !");
        }
    }
    else{
        alert("Please Enter your user PIN !");
    }
}
else{
    alert("Please Enter your account number !");
}