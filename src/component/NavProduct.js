import React from 'react';
// import { useSelector } from 'react-redux';
// import { Data } from "../Data";

function NavProduct({ filteritem, allcategory }) {
    

    // const state=useSelector((state)=>state.addItem)
    // console.log( "navproduct",Data)


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* <nav>

                            {allcategory.map((curelm) => {
                                return (
                                    <button className='btn btn-outline-primary' onClick={() => filteritem(curelm)} >{curelm}</button>
                                )
                            })
                            }

                        </nav> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavProduct