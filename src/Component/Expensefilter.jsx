import React, { useState } from "react"
import './Expensefilter.css'
const Expensefilter = (props) => {
    const [filteryear, setFilteryear] = useState("All");

    const Selectyear = (e) => {
        setFilteryear(e.target.value);
    }
    props.filtervalue(filteryear);

    return (
        <>
            <div className="filterAll">
                <select className="filterBtn" onChange={Selectyear}>
                    <option value="All">All</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
        </>
    )
}
export default Expensefilter;