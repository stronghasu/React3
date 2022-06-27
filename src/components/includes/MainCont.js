import React from "react";

function MainInfo({ text }) {
  return <div>{text}</div>;
}

const mainText = [
  { text: "Welcome To " },
  { text: "My Portfolio." },
  { text: "Please Enjoy" },
  { text: "It Slowly" },
];

function MainCont() {
  return (
    <section className="main__cont">
      <div className="main__inner">
        {mainText.map((txt) => (
          <MainInfo text={txt.text} key={txt.text} />
        ))}
      </div>
    </section>
  );
}

export default MainCont;
