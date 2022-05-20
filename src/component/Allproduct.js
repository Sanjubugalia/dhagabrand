import React, { useState } from 'react';
import { Data } from '../Data';
import NavProduct from './NavProduct'
import Product from './Product';


const uniquelist = [
    ...new Set(
        Data.map((celem) => {
            return celem.categories
        })),
    "All"
]
console.log(uniquelist)

function Allproduct() {
    const [cartdata, setCartdata] = useState(Data)
    const [allcategory, setAllcategory] = useState(uniquelist)

    const filteritem = (cat) => {
        if (cat === "All") {
            setCartdata(Data)
        }
        const updatelist = Data.filter((item) => {
            return item.categories === cat
        })
        setCartdata(updatelist)

    }

    return (
        <>
            <NavProduct filteritem={filteritem} allcategory={allcategory} />
            <Product cartdata={cartdata} />

        </>
    )
}

export default Allproduct