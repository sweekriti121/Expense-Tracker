import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    //connecting components to the context in order to get values from global state and using destructing to get budget from context
    const { budget } = useContext(AppContext);
    //Bootstrap alert classes used to give grey background
    return (<div className='alert alert-secondary'><span>Budget: ₹{ budget }</span></div>);
};

export default Budget;