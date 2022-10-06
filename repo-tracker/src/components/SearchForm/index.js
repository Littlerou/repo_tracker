import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'

function SearchForm() {

    const [ username, setUsername ] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'SEARCH', payload: username})
        window.location.href = `http://localhost:3000/${username}`    
    }

    const updateInput = (e) => {
        const input = e.target.value 
        setUsername(input)
    }

    

    return (
        <form role="form" onSubmit={handleSubmit}>
            

            <input aria-label="username" type="text" value={username} onChange={updateInput}/>
            
            <input id={'submitBtn'} type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
