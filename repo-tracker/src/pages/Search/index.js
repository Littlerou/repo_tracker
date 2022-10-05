import React from 'react';
import { useSelector, useEffect } from 'react-redux';
import { SearchForm, Result } from '../../components';
import axios from 'axios';

function Search() {

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
                console.log(data)
            } catch (error) {
                console.log(error)

            }
        }
        fetchStudents()
    }, [])

    const username = useSelector(state => state.username)
    return (
        <div id="search">
            Where do you want to search?
            <SearchForm />

            <h1>{username}</h1>

        </div>
    );

}

export default Search;
