import React, { Component } from "react";
import { render } from "react-dom";
import { Card, Space } from "antd";

const PassionsCard = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index) => setSelectedIndex(index);

  return (
    <Card
      title="Passions"
      color="white !important"
      style={{
        borderRadius: 10,
        width: 400,
        height: 360,
        background: "rgb(31, 48, 63)",
        top: -560,
        left: 725,
        font: "#ffffff",
      }}
    >
      <section
        id="slider"
        className="w-half h-half inline-flex items-center justify-center mb-5 flex-shrink-0"
      >
        <input
          type="radio"
          name="slider"
          id="s1"
          checked={selectedIndex === 0}
          onClick={() => check(0)}
        />
        <input
          type="radio"
          name="slider"
          id="s2"
          checked={selectedIndex === 1}
          onClick={() => check(1)}
        />
        <input
          type="radio"
          name="slider"
          id="s3"
          checked={selectedIndex === 2}
          onClick={() => check(2)}
        />
        <label htmlFor="s1" id="slide1">
          <img
            className="fea"
            src="https://picsum.photos/200/200"
            width="100%"
          />
        </label>
        <label htmlFor="s2" id="slide2">
          <img
            className="fea"
            src="https://picsum.photos/200/300"
            width="100%"
          />
        </label>
        <label htmlFor="s3" id="slide3">
          <img
            className="fea"
            src="https://picsum.photos/300/300"
            width="100%"
          />
        </label>
      </section>
    </Card>
  );
};

export default PassionsCard;
