import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getProduct, getCategory } from '../service'

const Blank = ({ isLoading, getItems, getCats }) => {
    const [pageSize, setPz] = useState(15)
    useEffect(() => {
        isLoading(true)
        const fetchData = async () => {
            try {
                let item = (await getProduct(pageSize)).data.items
                let cat = (await getCategory()).data
                getCats(cat)
                getItems(item)
            } catch (error) {
                console.log(error)
            } finally {
                isLoading(false)
            }
        }

        fetchData()
    }, [pageSize])

    return (
        <div className="am-container-pages relative">
            <div className="sticky top-0 z-50">
                <nav className="bg-white p-3 border-b border-green-600">
                    <div className="am-container flex">
                        <div className="flex gap-10 items-center justify-between w-full sm:justify-start sm:w-2/6">
                            <img 
                                alt="logo"
                                src="https://staging-cuan.awalmula.co/pub/static/version1642760877/frontend/Magento/awalmula/id_ID/images/awalmula-logo-beta.png"
                                className="w-36 h-10"></img>
                            <div className="am-burger-toggle sm:hidden"></div>
                        </div>
                        <div className="hidden sm:flex w-4/6 gap-5">
                            <div className="w-full bg-gray-100 rounded-full">
                                <input 
                                    type="text"
                                    placeholder="Search here"
                                    className="w-full h-10 bg-transparent outline-none border-none px-5"
                                    ></input>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="outline-none border-none bg-green-400 px-5 py-1 rounded-full text-white font-light"
                                    >Login</button>
                                <button
                                    className="outline-none border-none bg-green-400 px-5 py-1 rounded-full text-white font-light"
                                    >Register</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Blank