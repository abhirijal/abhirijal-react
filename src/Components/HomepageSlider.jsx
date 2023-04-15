import { useEffect, useRef } from "react"
import { textIntro, buttonIntro, imgIntro } from "./Animate"
import { Link } from "react-router-dom"

const HomepageSlider = () => {
    let firstLine = useRef(null)
    let secondLine = useRef(null)
    let thirdLine = useRef(null)
    let firstButton = useRef(null)
    let firstImg = useRef(null)

    useEffect(() => {
        textIntro(firstLine)
        textIntro(secondLine)
        textIntro(thirdLine)
        buttonIntro(firstButton)
        imgIntro(firstImg)
    }, [firstLine, secondLine, thirdLine, firstButton])
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '100vh' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-end align-items-center order-lg-2 mb-5 mb-md-0">
                        {/* Desktop */}
                        <div className="d-none d-lg-block">
                            <img ref={(el) => { firstImg = el }} src="/me3.jpg" alt='Abhi Rijal' className="img-fluidd-block" style={{ 'width': '550px', 'height': 'auto' }} />
                        </div>
                        {/* Mobile */}
                        <div className="d-lg-none mt-5">
                            <img src="/me2.jpg" alt='Abhi Rijal' className="img-fluid rounded-circle mx-auto d-block" style={{ 'width': '500px', 'height': 'auto' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start order-lg-1">
                        <div className="border-3 rounded-3 p-4 text-dark" style={{backgroundColor: "var(--light-beige)"}}>
                            <p className="font-manrope mb-2" ref={(el) => { firstLine = el }} style={{ 'fontSize': '25px', 'textAlign': 'center' }}>
                                Welcome to the world of <strong style={{ fontSize: "35px" }}>Abhi Rijal</strong> - a nature-loving lifelong learner and tech enthusiast, committed to engineering his life and software for a better future, <span style={{whiteSpace: "nowrap"}}>one byte at a time.</span>
                            </p>
                            {/* <div className="font-manrope fw-semibold mb-2" ref={(el) => { secondLine = el }} style={{ 'fontSize': '55px', 'textAlign': 'left' }}>I'm Abhi Rijal,</div>
                        <div className="font-manrope mb-5" ref={(el) => { thirdLine = el }} style={{ 'fontSize': '24px', 'textAlign': 'left' }}>.</div> */}
                            <div className="d-flex mt-4">
                                <Link to={'/about'} ref={(el) => { firstButton = el }} type="button" className="btn btn-primary border-0 font-manrope rounded-pill fw-bold py-3 text-left mx-auto" style={{ 'whiteSpace': 'nowrap', backgroundColor: "#E26F33" }}>My story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomepageSlider;