import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container" id="header">
                <div className="brand_name">
                    <h2>NETFLIX</h2>
                </div>

                <div className="inputs d-flex">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-globe"></i> Language
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">English</li>
                            <li className="dropdown-item">Hindi</li>
                        </ul>
                    </div>
                    <button className='btn btn-danger ms-2'> <i class="bi bi-person"></i> Sign In</button>
                </div>

            </div>

        </>
    )
}

export default Header
