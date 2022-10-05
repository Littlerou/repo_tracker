import React, {useState} from 'react';
import './style.css';

const Result = (data) => {
    
    

        console.log('we have the data', data)
        const names = [];
       

        data.forEach(repo => {
            names.push(repo.name)
        })
        
        console.log('names of repos', names)
        
        
    
        
    
    return(
        <div id="repo-div">

       <p>{names[0]}</p>
        </div>

    )
}

export default Result;