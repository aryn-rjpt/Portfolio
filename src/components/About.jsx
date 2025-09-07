import './About.css'

const About = () => {
    return (
        <div id="about">
            <div id="about-left">
                <span> Helloo, </span> <br /> Awesome Fellas! <br /> I am <span> Aryan </span>, <br /> A Developer   

                <button type="button" id='resume' onClick={()=>{
                    window.open("https://drive.google.com/file/d/1w4aKw2T8QbDssYIliUdoFGGGFhlyYYyL/view?usp=sharing", "_blank");
                }}>
                    <strong>Blank Cheque for Hirers!</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>

            </div>
            <div id="about-right">
                And honestly, <br /> Just a <span> student <br /> </span> looking to <br /> <span> learn and have <br /> fun! </span>
            </div>
        </div>
    )
}

export default About

