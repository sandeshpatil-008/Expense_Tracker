import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    console.log(userID)

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const [userData, setuserData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/expense/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);
                setTitle(rawData.title);
                setPrice(rawData.price);
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const editHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            title,
            price,
            date: new Date(date)
        }
        console.log(dataObj);
        axios.put(`http://localhost:5000/expense/${userID}`, dataObj)//send dataObject
            .then(() => {
                alert("Update Succesfully");
                navigate("/App");
            })
            .catch(err => console.log(err));
            
        // call the function form value send to app.js
        // props.rawData(dataObj);
        // click submit button refresh Screen then call function to value is blank

    }
    return (
        <>
            <h1 className="title" style={{ color: "white", textAlign: "center" }}>Edit Expense</h1>
            <form onSubmit={editHandler}>
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
                        <input type="submit" className="addExpBtn" value="Update Expense" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Update;