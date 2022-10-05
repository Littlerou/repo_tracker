import { React, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from "axios";

function Repo() {

    const params = useParams()
    
    const username = useSelector(state => state.username)
    useEffect(() => {
        const fetchRepo = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/repos/${username}/${params.repo}`)
                console.log(data)
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    
  );
}

export default Repo;