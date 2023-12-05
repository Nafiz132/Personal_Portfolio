import jsImage from "../images/js.png";
import reactImage from "../images/react1.jpg";
import nextJS from "../images/nextJS.jpg";
import nodeJS from "../images/node1.jpg";
import Java from "../images/java.jpg";
import html from "../images/html.jpg";
import Python from "../images/python1.jpg";
import Css from "../images/css3.jpg";
import SQL from "../images/sql.jpg";
import CPlus from "../images/cplus.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../images/arrow1.svg";
// import arrow2 from "../images/arrow2.svg";
import colorSharp from "../images/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>"I specialize in creating dynamic and interactive applications, harnessing the power of various programming languages to craft innovative solutions. With a strong foundation in both front-end and back-end development, I bring ideas to life by blending robust logic with creative design."</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={jsImage} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactImage} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nextJS} alt="Image" />
                                <h5>NextJS</h5>
                            </div>
                            <div className="item">
                                <img src={nodeJS} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={CPlus} alt="Image" />
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills