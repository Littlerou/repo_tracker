import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Search } from './pages'

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                   
                    <Route path="/" element={<Search />}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;