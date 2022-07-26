import React, { useState, useEffect } from "react"
import Expensedate from "./Expensedate";
import './Expenses.css'
import Expensefilter from "./Expensefilter";
import Chart from "./Chart";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Expenses = () => {

    const navigate = useNavigate();
    const { userID } = useParams({});
    console.log(userID);

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/expense")
            .then(async (res) => {
                const rawData = await res.data;
                console.log(rawData)
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const [updateyear, setUpdateyear] = useState();

    const filtervalue = (filteryear) => {
        setUpdateyear(filteryear);
    }
    let filterRecord = userData.filter(row => {
        const newdate = row.date
        const D = new Date(newdate);

        if (updateyear == "All") {
            return (row)
        }
        else {
            return (D.getFullYear() == updateyear)
        }
    });

    const deleteHandler = async (userID) => {
        await axios.delete(`http://localhost:5000/expense/${userID}`)
        alert("User Deleted")
        
        {window.location.reload();}
        // navigate("/App");
        // const filterData = userData.filter((row) => {
        //     return (
        //         row._id !== userID
        //     )
        // })
        // setuserData(filterData);
    }

    return (

        <>
            <div className="mainSection">
                <div className="filterChart">
                    <div className="filterByYear"><h2>Filter By Year</h2></div>
                    <Expensefilter filtervalue={filtervalue} />
                    <Chart filteredRecord={filterRecord} />
                </div>
                {
                    filterRecord.map(row => {
                        return (

                            <div className="container">
                                <div className="expDate">
                                    <Expensedate row={row} />
                                </div>
                                <div className="item">
                                    <h1>{row.title}</h1>
                                </div>
                                <div className="btnPrice">
                                    <h2 className="price">${row.price}</h2>
                                    {/* <NavLink exact to={`/update/${row._id}`}> */}
                                    <div className="editBtn">
                                        <h2 className="edit" onClick={() => navigate(`/update/${row._id}`)}>Edit</h2>
                                    </div>
                                    {/* </NavLink> */}
                                    <div className="editBtn delBtn ">
                                        <h2 className="edit" onClick={() => deleteHandler(row._id)}>Delete</h2>

                                    </div>
                                </div>

                            </div>

                        )
                    }
                    )
                }
            </div>

        </>
    )
}
export default Expenses;
