import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, Result } from '../../components';
import axios from 'axios';
import { Link, Outlet, useParams } from "react-router-dom";

function User() {

    const [repos, setRepos] = useState([])

    const username = useSelector(state => state.username)

    const params = useParams()

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${params.user}/repos`)
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
        <div id="user">

            <h1>{params.user}</h1>

            <ul>
                
            </ul>
            {names.map((name) => (
               <li>  
                   <a href={`/${params.user}/${name}`}>{name}</a>
               </li> 
            ))}


            <Outlet/>


        </div>
    );

}
export default User;