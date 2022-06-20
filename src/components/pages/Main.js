import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

// function Main() {
//   return (
//     <>
//       <Header />

//       {/* Contents 안에 넣어서 children으로 넘어갈 수 있게 */}
//       <Contents>
//         <MainCont />
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
      gsap.to("#header", {
        duration: 0.8,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".main__inner > div:nth-child(1)", {
        duration: 1.0,
        opacity: 1,
        y: 0,
        delay: 1.4,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(".main__inner > div:nth-child(2)", {
        duration: 1.0,
        opacity: 1,
        y: 0,
        delay: 1.6,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(".main__inner > div:nth-child(3)", {
        duration: 1.0,
        opacity: 1,
        y: 0,
        delay: 1.8,
        ease: "elastic.out(1, 0.3)",
      });
      gsap.to(".main__inner > div:nth-child(4)", {
        duration: 1.0,
        opacity: 1,
        y: 0,
        delay: 2.0,
        ease: "elastic.out(1, 0.3)",
      });
    }, 10);
  };

  getSite = () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      document.querySelector("body").style.background = "#000";
      this.getSite();
    }, 2000);
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
              <MainCont />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Main;

// Contents대신 들어있던 것 !!!! -> MainCont.js로 옮김

// {/* 언더바를 두개쓰면 사스에서 뒤에글자만 바꿔서 쓰면됨! */}
// <section className="main__cont">
// <div className="main__inner">
//   {textInfo.map((txt) => (
//     <Info text={txt.text} />
//   ))}
// </div>
// </section>
