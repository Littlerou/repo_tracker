import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components';
import { getResult } from '../../actions';

function Search(){

    const username = useSelector(state => state.username);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();
    
    const search = searchTerm => dispatch(getResult(searchTerm));



    return (
        <div id="search">
            Where do you want to search?
            <SearchForm getResult={search}/>

            <h1>{username}</h1>
            
        </div>
    );

}

export default Search;
