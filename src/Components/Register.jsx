import React from 'react'

const Register = () => {
    return (
        <div>
            <div className="">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='d-flex'>
                    <input type="text" name="email" className='form-control form-control-lg w-75' placeholder='Register you E-mail' />
                    <button className="btn btn-danger w-25 ms-2">Get Started <i class="bi bi-chevron-right"></i> </button>
                </div>
            </div>

        </div>
    )
}

export default Register
