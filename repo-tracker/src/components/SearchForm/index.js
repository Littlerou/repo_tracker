import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        getResult(location);
        setLocation('')
        
    }

    const updateInput = (e) => {
        const input = e.target.value 
        setLocation(input)
    }

    

    return (
        <form role="form" onSubmit={handleSubmit}>
            

            <input aria-label="Location" type="text" value={location} onChange={updateInput}/>
            
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;
