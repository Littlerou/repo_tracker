import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ username, setUsername ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        
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
