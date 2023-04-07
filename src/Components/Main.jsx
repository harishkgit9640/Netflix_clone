import React from 'react'
import Register from './Register'

const Main = () => {
    return (
        <>
            <div className="text-center">
                <h1 className='title1'>Unlimited movies, TV shows and more.</h1>
                <h2 className='title2 mt-4'>Watch anywhere. Cancel anytime.</h2>
                <div className="register mt-5">
                    <Register />
                </div>
            </div>
        </>
    )
}

export default Main
