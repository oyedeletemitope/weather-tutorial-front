import moment from "moment-timezone";
import React from "react";
import Image from "next/image";

export default function TodaysWeather() {
  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <div className="today__sun-times">
            <div>
              <span>Sunrise</span>
            </div>

            <div>
              <span>Sunset</span>
            </div>
          </div>
        </div>

        <div className="today__right-content">
          <div className="today__icon-wrapper">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
