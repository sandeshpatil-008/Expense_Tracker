import React, { useState } from "react";
import './Expenseform.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Expenseform = () => {

const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const [formview, setFormview] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            // id: parseInt((Math.random() * 1000)),
            title,
            price,
            date:new Date(date)
        }
        console.log(dataObj);
        axios.post("http://localhost:5000/expense", dataObj)//send dataObject
        window.location.reload();
       
        // call the function form value send to app.js
        // props.rawData(dataObj);
        // click submit button refresh Screen then call function to value is blank
        alert("Add Succesfully");
        setTitle("");
        setPrice(0);
        setDate(new Date());
        setFormview(!formview);
        navigate("/App");
    } 
    return (
        <>
            <form onSubmit={submitHandler} className={formview ? "dBlock" : "dNone"}>
                <div className="list">
                    <div>
                        <label>Title</label><br />
                        <input type="text" className="inputTitle" onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div>
                        <label>Amount</label><br />
                        <input type="number" className="inputTitle" onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div>
                        <label>Date</label><br />
                        <input type="date" className="inputTitle" onChange={e => setDate(e.target.value)} value={date} />
                    </div><br></br>
                    <div className="addExp">
                        <input type="submit" className="addExpBtn" value="Add Expense" />
                    </div>
                </div>
            </form>
            <div className="newBtn">
                <div className="addNewBtn">
                    <input type="submit" value="New Expense" onClick={() => setFormview(!formview)} className={formview ? "dNone" : "dBlock"} />
                </div>
            </div>
            <div>
            </div>
        </>
    )
}
export default Expenseform;