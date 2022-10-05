import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Search, Repo, User } from './pages'
import './style.css'

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Search />}>
                        <Route path=":user" element={<User />}>
                            <Route path=":repo" element={<Repo />}></Route>
                        </Route>
                    </Route>
                </Routes>
            </main>
        </div>

    )
}

export default App;