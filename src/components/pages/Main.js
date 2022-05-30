import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
// import axios from "axios";
import { gsap } from "gsap";

// 함수형 컴퍼넌트 vs 클래스형 컴퍼넌트
// ==> 함수형 컴퍼넌트 (클래스형 장점)  ==> 리액트 훅

// function Main() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <MainCont />
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Main extends React.Component {
  state = {
    isLoading: true,
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".main__inner div:nth-child(1)", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".main__inner div:nth-child(2)", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.6,
        ease: "power4.out",
      });
      gsap.to(".main__inner div:nth-child(3)", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.8,
        ease: "power4.out",
      });
      gsap.to(".main__inner div:nth-child(4)", {
        duration: 0.3,
        y: 0,
        opacity: 1,
        delay: 2.0,
        ease: "power4.out",
      });
    }, 10);
  };

  secondAnimation = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      this.secondAnimation();
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    // console.log(isLoading);

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <MainCont />
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
        ;
      </>
    );
  }
}

export default Main;
