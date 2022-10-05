import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, Result } from '../../components';
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";

import './style.css'
function Search() {

    const [repos, setRepos] = useState([])

    const username = useSelector(state => state.username)
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
                setRepos(data)
                console.log(data)
            } catch (error) {
                console.log(error)

            }
        }
        fetchRepos()
    }, [username])


    const names = []
    repos.forEach((repo) => {
        names.push(repo.name)
    })


    return (
        <div id="search">
            <p>Enter your GitHub username:</p>
            <SearchForm />

            <Outlet/>


        </div>
    );

}

export default Search;
