import React from 'react';

//Function to create a reset button
function Reset({setBalanceCalc}) {
    function ResetBalance() {
        setBalanceCalc(0);
    }
    
      return (
        <div>
            <button 
                id="reset-button"
                type="button"
                onClick={ResetBalance}
                >Reset balance
            </button>
        </div>
      );
    }
    
    export default Reset;