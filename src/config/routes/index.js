import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blank } from '../../layouts'
import { Home } from '../../pages'

export default function AmRoutes() {
    const [items, setItems] = useState([])
    const [cats, setCats] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    return (
        <Router>
            <Routes>
                <Route path="/" 
                    element={
                        <Blank 
                            getItems={(e) => setItems(e)} 
                            getCats={(e) => setCats(e)} 
                            isLoading={(e) => setIsLoading(e)}/>
                    }>
                    <Route index 
                        element={
                            <Home 
                                items={items} 
                                category={cats.children_data} 
                                loading={isLoading}/>} />
                </Route>
            </Routes>
        </Router>
    )
}
