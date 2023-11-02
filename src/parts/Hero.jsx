import React from "react";

import ImageHero from "src/assets/images/img-hero.jpg";
import ImageHero_ from "src/assets/images/img-hero-frame.jpg";
import IconCities from "/images/icon-cities.svg";
import IconTraveler from "/images/icon-traveler.svg";
import IconTreasure from "/images/icon-treasure.svg";
import Button from "src/elements/Button";

export default function Hero(props) {
  function showostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <div className="container pt-4">
      <div className="row align-itens-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showostPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: "4rem" }}>
            <div className="col-auto" style={{ marginRight: 30 }}>
              <img src={IconTraveler} alt="Travelers" width="37" height="37" />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 30 }}>
              <img src={IconTreasure} alt="Treasure" width="37" height="37" />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 30 }}>
              <img src={IconCities} alt="Cities" width="37" height="37" />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 540, height: 370 }}>
            <img
              src={ImageHero}
              alt="Hero Home"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Hero Home Frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
