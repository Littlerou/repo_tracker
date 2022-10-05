import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Search, Repo} from './pages'
import './style.css'


function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>

                    <Route path="/" element={<Search />}/>
                    <Route path=":repo" element={<Repo />}/>
                </Routes>
            </main>
        </div>

    )
}

export default App;