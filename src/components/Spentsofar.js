import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Spentsofar = () => {
    const {expenses}=useContext(AppContext);
    const totalexpenses=expenses.reduce((total,item)=>{
        return ( total+=item.cost);
    },0);
    //Bootstrap alert classes used to give blue background
    return (<div className='alert alert-primary'><span>Spent so far: ₹{totalexpenses}</span></div>);
};

export default Spentsofar;