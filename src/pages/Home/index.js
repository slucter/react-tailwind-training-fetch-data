import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AmCard, AmLoading } from '../../components'

const Index = ({ items = [], category = [], loading = true }) => {
    const [ catActive, setCatActive ] = useState([])
    return (
        <div className="bg-gray-100 py-5">
            <div className="am-container flex flex-col gap-4">
                <section id="products" className="px-4 flex flex-wrap gap-4">
                    <p className="text-3xl font-bold text-black">K A T E G O R I</p>
                    {
                        category.length > 0 ?
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-wrap w-full py-4 gap-4">
                                {
                                    category.map((data, idx) => {
                                        return (
                                            <span 
                                                key={idx}
                                                onClick={() => setCatActive(data.children_data)}
                                                className="p-2 cursor-pointer bg-green-700 text-white rounded-full text-md font-regular"
                                            >{ data.name }</span>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex flex-wrap w-full py-4">
                                {
                                    catActive.map((data, idx) => {
                                        return (
                                            <div key={idx} className="w-6/12 sm:w-1/5 p-2 flex">
                                                <div className="flex w-full flex-col gap-4 p-4 items-center bg-white shadow-md rounded-md relative">
                                                    <span className="p-2 bg-orange-500 text-md font-regular rounded-md text-white">{ data.name }</span>
                                                    <div className="w-full flex flex-col gap-2">
                                                        {
                                                            data.children_data.map((link,idx) => {
                                                                return(
                                                                    <Link key={idx} to="#" className="text-blue-400">{ link.name }</Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <AmLoading />
                    }
                </section>
                <section id="products" className="px-4 flex flex-wrap gap-4">
                    <p className="text-3xl font-bold text-black">P R O D U K</p>
                    {
                        items.length > 0 ?
                        <div className="flex flex-row w-full flex-wrap">
                            {
                                items.map((data, index) => {
                                    return (
                                        <div key={index} className="w-6/12 sm:w-1/5 flex p-2">
                                            <AmCard data={data}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <AmLoading />
                    }
                </section>
            </div>
        </div>
    )
}
export default Index