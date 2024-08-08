import React from 'react';
import './App.css';
import Form from './Form'
import Reset from './Reset'

// App function to store everything
function App() {

// Creating parent states to use in the other files
const[depositCalc, setDepositCalc] = React.useState("");
const [withdrawCalc, setWithdrawCalc] = React.useState("");
const[balanceCalc, setBalanceCalc] = React.useState(0);

  // Adding the components and the states
  return (
    <div>
      <Form 
      depositCalc={depositCalc}
      setDepositCalc={setDepositCalc}
      withdrawCalc={withdrawCalc}
      setWithdrawCalc={setWithdrawCalc}
      balanceCalc={balanceCalc}
      setBalanceCalc={setBalanceCalc}
      />
      <Reset
      setBalanceCalc={setBalanceCalc}
      />
    </div>
  );
}

// Exporting the App component
export default App;
