import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, Search } from './pages'

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />}/>
                    <Route path="/search" element={<Search />}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;