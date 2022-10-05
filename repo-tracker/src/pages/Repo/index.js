import React from "react";
import { useParams } from 'react-router-dom'

function Repo() {

    const params = useParams()
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
    </div>
    
  );
}

export default Repo;