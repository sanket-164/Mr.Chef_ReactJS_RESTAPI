import React from 'react'
import loader from './loader.gif'

function Loader() {
    return (
        <>
            <div className="d-flex justify-content-center flex-loader">
                <img src={loader} alt='loading' id="loader" height="200px" width="200px"></img>
            </div>
        </>
    )
}

export default Loader
