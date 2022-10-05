import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, Result } from '../../components';
import axios from 'axios';
import { Link, Outlet, useParams } from "react-router-dom";

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

    const [ aboutDisplay, setAboutDisplay ] = useState('block')

    useEffect(() => {
        window.location.href === 'http://localhost:3000/' ? setAboutDisplay('block') : setAboutDisplay('none')
        console.log(aboutDisplay);
    }, [window.location.href])
    return (
        <>
            <div id="about" style={{display: aboutDisplay }}>
                <h2>
                    This site was created by Isobel Melvin & Bradley Neve
                </h2>
                <p>This site allows you to view a GitHub users public repositries, and see some in depth statistics for each. To get started just enter the user you wish to view below.</p>
            </div>

            <div id="search">
                What's the username?
                <SearchForm />
                <Outlet />


            </div>
        </>

    );

}

export default Search;
