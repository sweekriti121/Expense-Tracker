import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses,budget}=useContext(AppContext);
    const totalexpenses=expenses.reduce((total,item)=>{
        return ( total+=item.cost);
    },0);
    const alertType=totalexpenses>budget?'alert-danger':'alert-success';
    //Bootstrap alert classes used to give green background
    return (<div className={`alert ${alertType}`}><span>Remaining: ₹{budget-totalexpenses}</span></div>);
};

export default Remaining;