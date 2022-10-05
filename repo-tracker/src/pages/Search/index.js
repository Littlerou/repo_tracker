import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, Result } from '../../components';
import axios from 'axios';

function Search() {

    const [ repos, setRepos ] = useState([])
    
    const username = useSelector(state => state.username)
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
                console.log(data)
            } catch (error) {
                console.log(error)

            }
        }
        fetchRepos()
    }, [username])

    return (
        <div id="search">
            Where do you want to search?
            <SearchForm />

            <h1>{username}</h1>

        </div>
    );

}

export default Search;
