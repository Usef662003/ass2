import React from 'react';
import  "./PROTFOLIO.css"
import img1 from "../img/poert1.png"
import img2 from "../img/port2.png"
import img3 from "../img/port3.png"
export default function PORTFOLIO() {
    return (
        <>
            <div id="protfolio" className='bg-white'>
            <div className="container">
                <div className="header text-center">
                    <h1>PORTFOLIO COMPONENT</h1>
                    <div className="icon1 text-center mb-3">
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6  col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img1} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img2} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img3} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img1} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img2} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="oneOfImg rounded-3 position-relative d-flex justify-content-center  align-items-center">
                            <img className='rounded-3 ' src={img3} alt="portfolio1" />
                            <div className="plus rounded-3  ">
                                <i className="fa-solid fa-plus "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
