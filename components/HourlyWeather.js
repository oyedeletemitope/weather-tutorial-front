import React from "react";
import moment from "moment-timezone";
import Image from "next/image";
export default function HourlyWeather() {
  return (
    <div className="hourly">
      <div className="hourly__inner">
        <div className="hourly__box-wrapper">
          <div className="hourly__box"></div>
        </div>
      </div>
    </div>
  );
}
