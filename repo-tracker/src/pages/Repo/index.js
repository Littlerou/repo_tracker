import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from "axios";

function Repo() {

    const [ repoData, setRepoData ] = useState([])

    const params = useParams()
    
    // const username = useSelector(state => state.username)
    const username = 'littlerou'
    useEffect(() => {
        const fetchRepo = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/repos/${username}/${params.repo}`)
                setRepoData(data)
                console.log(repoData.forks)
            } catch (error) {
                console.log(error)

            }
        }
        fetchRepo()
    }, [username])

  return (
    <div className="content">
        <h1>{params.repo}</h1>
        <ul>
            <li>Forks: {repoData.forks}</li>
            <li>Stargazers: {repoData.stargazers_count}</li>
            <li>Clone URL: {repoData.clone_url}</li>
            <li>Open issues: {repoData.open_issues}</li>
        </ul>
    </div>
    
  );
}

export default Repo;