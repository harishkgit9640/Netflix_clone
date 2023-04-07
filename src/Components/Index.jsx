import React from 'react'
import Header from './Header'
import './main.css';
import Main from './Main';
const Index = () => {
    return (
        <>
            <div className='main_container'>
                <Header />
                <div className="main_box">
                    <Main />
                </div>
            </div>
        </>

    )
}

export default Index
