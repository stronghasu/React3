import React from "react";
function ContactInfo({ text }) {
  return <div>{text}</div>;
}

const ContactText = [
  { text: "You are" },
  { text: "already" },
  { text: "doing well." },
];

function ContactCont() {
  return (
    <section className="contact__cont">
      <div className="container">
        <div className="contact__inner">
          <div className="text">
            {ContactText.map((txt) => (
              <ContactInfo text={txt.text} key={txt.text} />
            ))}
          </div>
          <p className="desc">
            같은 목표를 위해 달려갈 웹 퍼블리셔 &#38; 프론트 앤드 개발자를
            모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactCont;
