import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchForm() {

    const [ username, setUsername ] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'SEARCH', payload: username})
        window.location.href = window.location.href + username    
    }

    const updateInput = (e) => {
        const input = e.target.value 
        setUsername(input)
    }

    

    return (
        <form role="form" onSubmit={handleSubmit}>
            

            <input aria-label="username" type="text" value={username} onChange={updateInput}/>
            
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
