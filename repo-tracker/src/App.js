import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get('https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/shaw/roster.json')
        const newStudents = data.students
        setStudents(newStudents)
      } catch (error) {
        console.log(error)

      }
    }
    fetchStudents()
  }, [])


  const renderStudents = students.map((student, idx) => {
    return (<Card key={idx} name={student.name} github={student.github} />)
  })

  return (
    <div className="App">
      <h2>students below</h2>
      {renderStudents}

    </div>
  );
}

export default App;