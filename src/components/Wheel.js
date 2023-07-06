import React, { useEffect } from "react";
import "../assets/styles/wheel.css";
import { useGlobalContext } from "../context";

const Wheel = () => {
  const { activeWheel, setActiveWheel, currReward, setCurrReward, initiation } =
    useGlobalContext();

  useEffect(() => {
    if (activeWheel && initiation) {
      const wheel = document.querySelector(".wheel");
      let deg;
      wheel.addEventListener("click", clickEvent);
      function clickEvent() {
        wheel.style.pointerEvents = "none";
        deg = 90 + Math.floor(Math.random() * 5000);
        wheel.style.transition = "all 5s ease-in-out";
        wheel.style.transform = `rotate(${deg}deg)`;
      }
      wheel.addEventListener("transitionend", () => {
        wheel.style.pointerEvents = "auto";
        wheel.style.transition = "none";
        deg = deg % 360;
        wheel.style.transform = `rotate(${deg}deg)`;
        setActiveWheel(false);
        setCurrReward(determineReward(deg));
      });
      return () => {
        wheel.removeEventListener("click", clickEvent);
      };
    }
  }, [activeWheel, initiation]);

  const determineReward = (deg) => {
    switch (true) {
      case 18 <= deg && deg < 54:
        console.log("150");
        return 150;
      case 54 <= deg && deg < 90:
        console.log("bankrut");
        return "bankrut";
      case 90 <= deg && deg < 126:
        console.log("1500");
        return 1500;
      case 126 <= deg && deg < 162:
        console.log("250");
        return 250;
      case 162 <= deg && deg < 198:
        console.log("150");
        return 150;
      case 198 <= deg && deg < 234:
        console.log("1000");
        return 1000;
      case 234 <= deg && deg < 270:
        console.log("500");
        return 500;
      case 270 <= deg && deg < 306:
        console.log("stop");
        return "stop";
      case 306 <= deg && deg < 342:
        console.log("250");
        return 250;
      case 342 <= deg || deg < 18:
        console.log("400");
        return 400;
      default:
        console.log("null");
        return null;
    }
  };
  return (
    <div className="wheel-container">
      <div className="arrow"></div>
      <div className="wheel">
        <div className="part" style={{ "--i": 0, background: "#4950b8" }}>
          <span>150</span>
        </div>
        <div className="part" style={{ "--i": 1, background: "#b23a40" }}>
          <span>250</span>
        </div>
        <div className="part" style={{ "--i": 2, background: "#8ae536" }}>
          <span>1500</span>
        </div>
        <div className="part" style={{ "--i": 3, background: "#3d4240" }}>
          <span>BANKRUT</span>
        </div>
        <div className="part" style={{ "--i": 4, background: "#c82696" }}>
          <span>150</span>
        </div>
        <div className="part" style={{ "--i": 5, background: "#e8ff37" }}>
          <span>400</span>
        </div>
        <div className="part" style={{ "--i": 6, background: "#d94f5a" }}>
          <span>250</span>
        </div>
        <div className="part" style={{ "--i": 7, background: "#636962" }}>
          <span>STOP</span>
        </div>
        <div className="part" style={{ "--i": 8, background: "#d54c4b" }}>
          <span>500</span>
        </div>
        <div className="part" style={{ "--i": 9, background: "#beff70" }}>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
};

export { Wheel };
