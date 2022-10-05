import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, Search, Repo} from './pages'

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />}></Route>
                    <Route path="/search" element={<Search />}>
                        <Route path=":repo" element={<Repo />}>
                    </Route>
                    </Route>
            </Routes>
        </main>
        </div >
    )
}

export default App;