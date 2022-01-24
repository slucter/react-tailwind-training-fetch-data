import React, { useEffect, useState } from 'react'

export default function AmCard({ data = {} }) {
    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
     }
     const [wr, serWr] = useState({})
     const [prodPrice, setPr] = useState({})

     useEffect(() => {
        serWr(JSON.parse(data?.extension_attributes?.warehouse_data[0] ?? []))
        setPr(JSON.parse(data?.extension_attributes?.am_product_price_data[0] ?? []))
     }, [])

     return (
        <>
            <div className="w-full flex flex-col rounded-md shadow-md bg-white">
                <div className="w-full h-40 sm:h-60">
                    <img 
                        className="w-full h-full rounded-md"
                        src="https://staging-cuan.awalmula.co/pub/media/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/u/n/untitled-1_0003_layer-5_-_copy_1.png"
                        alt="AmCard" />
                </div>
                <div className="w-full flex flex-col px-4 py-3 gap-4">
                    <div className="w-full flex jutify-start flex-col gap-1 cursor-pointer">
                        <span className="text-xs sm:text-sm text-gray-400">Bumi Bited</span>
                        <span 
                            className="text-sm sm:text-md text-gray-600 font-bold line-clamp-2 hover:line-clamp-6 hover:text-orange-400"
                            >{ data?.name ?? 'No Name'} </span>
                    </div>
                    <div className="w-full flex jutify-start flex-col gap-1 cursor-pointer">
                        <span className="text-xs text-gray-400">Terjual 15</span>
                        <span className="text-sm text-gray-400 block hover:hidden">{ wr?.name ?? 'Warehouse' }</span>
                        <p className="text-sm text-gray-400 line-clamp-1 hover:line-clamp-6">{ wr?.city ?? '-' }</p>
                        { 
                            prodPrice.product_special_price !== 0 ? 
                            <div className="flex gap-2 items-center">
                                <span className="text-xs text-red-600 bg-red-200 rounded-md p-1">10%</span>
                                <span className="text-xs font-bold text-gray-600 line-through">{ formatRupiah(prodPrice.product_original_price) }</span>
                            </div>
                            : ''
                        }
                    </div>
                    <div className="w-full flex jutify-start flex-col gap-1 cursor-pointer">
                        <span className="text-md text-gray-600 font-bold">
                            { 
                                prodPrice.product_special_price !== 0 ?
                                formatRupiah(prodPrice.product_special_price) 
                                : formatRupiah(prodPrice.product_original_price)                      
                            }</span>
                    </div>
                </div>
            </div>
        </>
    )
}
