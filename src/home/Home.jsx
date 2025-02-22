import "./Homee.css";
import img from "/img/avataaars.svg"
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container item p-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 col-12">
                            <div className="img">
                                <img src={img} alt="" />
                            </div>
                            <h1 className=" text-center">START FRAMEWORK</h1>
                            <div className="icon1 text-center">
                            <i class="fa-solid fa-star"></i>
                            </div>
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
