import React from 'react'
import "./CONTACT.css"

export default function CONTACT() {
    return (<>
    <div id="CONTACT" className='bg-white'>
        <div className="container" id='container' >
            <div className="headerC text-center">
                <h1>PORTFOLIO COMPONENT</h1>
                <div className="iconC text-center mb-3">
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
            <div className="forms m-auto">
                <div className="form-floating my-1">
                    <input type="text" className="form-control border-1 border-start-0 border-end-0 border-top-0" id="productName" />
                    <label for="productName">userName</label>
                </div>
                <div className="form-floating my-1">
                    <input type="number" className="form-control border-1 border-start-0 border-end-0 border-top-0" id="productName" />
                    <label for="productName">userAge</label>
                </div>
                <div className="form-floating my-1">
                    <input type="email" className="form-control border-1 border-start-0 border-end-0 border-top-0" id="productName" />
                    <label for="productName">userEmail</label>
                </div>
                <div className="form-floating my-1">
                    <input type="password" className="form-control border-1 border-start-0 border-end-0 border-top-0" id="productName" />
                    <label for="productName">userPassword</label>
                </div>
            <button type="button" class="btn btn-info">send Message</button>
            </div>
        </div>
    </div>
    </>
    )
}





































