import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

function Youtube() {
  // 리액트 훅
  // ES6 : destructuring 문법
  // useState : 변수는 {}안에 바인딩하거나, useState안에 담는 2가지 방법이 있다.
  // useState안에 배열로 데이터가 담긴다. [데이터(내가 작성한), 그 데이터를 변경하는 함수]
  // let [변수명, 변수명] = useState("데이터값"); => useState["데이터값", 변경함수]
  // useState에는 문자, 숫자, 배열, 객체 모두 저장 가능!
  // 수시로 바뀌는 데이터들을 변수로 담아 사용하기 유용하다.

  const [videos, setVideos] = useState([]);

  const mainAnimation = () => {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");

      gsap.to("#header", {
        duration: 0.8,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".cont__title strong", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.0,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "power4.out",
      });
      gsap.to(".youtube__search", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "power4.out",
      });
      gsap.to(".youtube__inner", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "power4.out",
      });
    }, 2000);
  };

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}react&key=AIzaSyDrvPW0RJ1JWLlvXmb4W7LN6g7NMdNth9w`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=react&key=AIzaSyDrvPW0RJ1JWLlvXmb4W7LN6g7NMdNth9w
      `,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        mainAnimation();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <Title title={["Youtube", "reference"]} />
        <section className="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeCont videos={videos} />
            </div>
          </div>
        </section>
        <Touch />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
