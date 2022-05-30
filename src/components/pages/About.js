import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

class About extends React.Component {
  state = {
    isLoading: true,
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".container h1 strong", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".container h1 em", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.4,
        ease: "power4.out",
      });
      gsap.to(".about__inner", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.6,
        ease: "power4.out",
      });
    }, 10);
  };

  secondAnimation = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1600);
  };
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      this.secondAnimation();
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["about", "me"]} />
              <AboutCont />
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default About;
