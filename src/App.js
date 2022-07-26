import React from "react"
import './App.css'
import Expenses from "./Component/Expenses";
import Expenseform from "./Component/Expenseform";
const App = () => {
    
    return (
        <>
        <div className="title">Expense Tracker</div>
            <Expenseform  /> 
            <Expenses />
        </>
    )
}
export default App;