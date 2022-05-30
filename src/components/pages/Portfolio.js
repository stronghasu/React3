import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Portcont from "../includes/PortCont";
import Loading from "../includes/Loading";
// import Animation from "../includes/Animation";
import axios from "axios";
import { gsap } from "gsap";

// 함수형 컴포넌트
// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "book"]} />
//         <Portcont></Portcont>
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// 클래스형 컴포넌트 : Class는 함수의 집합체
// state는 리액트용 변수
class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  // mainAnimation = () => {
  //   // 0.8초동안 위치는 0으로
  //   gsap.to("#header", { duration: 0.8, top: 0 });
  // };

  //콘솔창에 '#header를 찾을수없습니다' 라고 나오는 이유는 동기..?방식으로 되서.
  // 그런데 여기서는 async를 못쓰니까? 대신 setTimeout
  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".cont__title strong", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1.6,
        ease: "power4.out",
      });
      gsap.to(".port__inner", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.8,
        ease: "power4.out",
      });
    }, 10);
  };

  // 동기 : 동시에 일어나는것 //비동기 : 동시에 일어나지 않는다. (소스를 다 다운받은 다음에 실행해라! )
  // jQuery의 ajax도 비동기..?
  // async , await로 비동기방식으로 만들어주는것

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );

    //console.log(ports);
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false, ports: ports });
      this.mainAnimation();
    }, 1600);

    // 클래스형에서 함수를 불러올 때는 this만 쓰면 됨
    // isLoading을 2초후에 false로 바꾸고 ports 데이터 가져오기
  };

  // 생명주기함수 : 사이트가 로딩 되자마자 실행
  componentDidMount() {
    // this.getPorts();
    setTimeout(() => {
      // 콜백함수 : 첫번째 끝나면 두번째 실행
      console.log("첫번째시작");
      document.getElementById("loading").classList.remove(".loading__active");
      this.getPorts();
    }, 2000);
  }

  // 출력
  render() {
    const { isLoading, ports } = this.state;
    console.log(ports);
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <Title title={["Portfolio", "book"]} />
              <Portcont ports={ports} />
              <Touch />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Portfolio;
