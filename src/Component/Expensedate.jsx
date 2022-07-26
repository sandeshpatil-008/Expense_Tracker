import React from "react";
import './Expensedate.css';

const Expensedate = (props) => {

    const newdate = props.row.date
    const D = new Date(newdate);
    const date = D.getFullYear();
    const monthValue = D.toLocaleString("en-us", { month: "long" });
    const dateDay = D.getDate();
    
    console.log(props.row)
    return (
        <>
            <div>
                <h2>{monthValue}</h2>
                <h2>{date}</h2>
                <h1>{dateDay}</h1>
                
            </div>
        </>
    )

};

export default Expensedate;