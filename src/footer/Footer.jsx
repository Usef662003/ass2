import "../footer/footer.css"
export default function Footer() {
    return (
        <>
            <footer id="id1" className="p-4 ">
                <div className="contain " >
                    <div className="row align-content-center">
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center">
                            <div className="item ">
                                <h2>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center">
                            <div className="icon">
                                <h2>AROUND THE WEB</h2>
                                <div className="d-flex justify-content-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center text-center">
                            <div className="item">
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
                <div className="footer2" id="id2">
                    <p>Copyright © Your Website 2021</p>
                </div>
        </>
    )
}
