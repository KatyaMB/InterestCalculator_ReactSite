import React from 'react';
import FormInputFields from './FormInputFields';
import Alert from './Alert';

// Function to create a form for the calculator with props from Form Input Fields
function Form({
    depositCalc, 
    setDepositCalc, 
    withdrawCalc, 
    setWithdrawCalc, 
    balanceCalc, 
    setBalanceCalc
}) {

    const [showAlert, setShowAlert] = React.useState(false);

    // Calculate the balance after deposit
    function CalculateWDeposit() {
        const deposit = parseFloat(depositCalc) || 0;
        setBalanceCalc((prevBalance) => prevBalance + deposit);
        setShowAlert(false);
    }

    // Calculate the balance after withdrawal
    function CalculateWWithdrawal() {
        const withdraw = parseFloat(withdrawCalc) || 0;
        setBalanceCalc((prevBalance) => {
            const newBalance = prevBalance - withdraw;
            if (newBalance < 0) {
                setShowAlert(true);
            } else {
                setShowAlert(false);
            }
            return newBalance;
        });
    }

    // Calculate the interest
    function CalculateInterest() {
        setBalanceCalc((prevBalance) => (prevBalance / 100 * 5) + prevBalance);
        setShowAlert(false);
    }

    // Calculate the bank fees
    function BankFees() {
        setBalanceCalc((prevBalance) => prevBalance - (prevBalance / 100 * 2));
        setShowAlert(false);
    }

    // Rounding up the balance
    function finalBalance() {
        return Math.round(balanceCalc);
    }

    // The form with buttons to create the fields and buttons
    return (
        <form className="main-form" onSubmit={(e) => e.preventDefault()}>
            <h1 id="form-title">My budget calculator</h1>
            <label id="deposit-label" htmlFor="deposit">Deposit</label>
            <FormInputFields 
                id="deposit" 
                className="input-fields"
                placeholder="£100"
                value={depositCalc}
                onChange={(e) => setDepositCalc(e.target.value)}
            />
            <button 
                className="button" 
                type="button"
                onClick={CalculateWDeposit}
            >
                Add
            </button>
            <label id="withdraw-label" htmlFor="withdraw">Withdraw</label>
            <FormInputFields 
                id="withdraw" 
                className="input-fields"
                placeholder="£100"
                value={withdrawCalc}
                onChange={(e) => setWithdrawCalc(e.target.value)}
            />
            <button 
                className="button" 
                id="withdraw-button"
                type="button"
                onClick={CalculateWWithdrawal}
            >
                Withdraw
            </button>
            <p id="interest" className="input-fields">Add interest</p>
            <button 
                className="button"
                type="button"
                onClick={CalculateInterest}
            >
                5%
            </button>
            <p id="bank-fees" className="input-fields">Charge bank fees</p>
            <button 
                className="button"
                type="button"
                onClick={BankFees}
            >
                2%
            </button>
            <br/>
            <p id="balance">Your Bank Balance is: £{finalBalance()}</p>
            {showAlert && (
                <Alert 
                    message="Your balance is negative"
                    onClose={() => setShowAlert(false)}
                />
            )}
        </form>
    );
}

// Exporting the component
export default Form;
