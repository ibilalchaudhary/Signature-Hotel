import React, { Component, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import buildingwhole from "../Assets/buildingwhole.png";
import bannerImg from "../Assets/bannerImg.png";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.png";
import apartmentPic from "../Assets/apartmentPic.png";
import sorroundingImg from "../Assets/sorroundingImg.png";
import main__backgound from "../Assets/main__backgound.png";
import BuildingDetailPic from "../Assets/BuildingDetailPic.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";
import buildingfullimg from "../Assets/buildingfullimg.png";
import strip1 from "../Assets/strip1.png";
import strip2 from "../Assets/strip2.png";
import strip3 from "../Assets/strip3.png";
import strip4 from "../Assets/strip4.png";
import strip5 from "../Assets/strip5.png";
import strip6 from "../Assets/strip6.png";
import strip7 from "../Assets/strip7.png";
import strip8 from "../Assets/strip8.png";
import strip9 from "../Assets/strip9.png";
import strip10 from "../Assets/strip10.png";
import strip11 from "../Assets/strip11.png";
import strip12 from "../Assets/strip12.png";
import strip13 from "../Assets/strip13.png";
import strip14 from "../Assets/strip14.png";
import strip15 from "../Assets/strip15.png";
import strip16 from "../Assets/strip16.png";
import strip17 from "../Assets/strip17.png";
import strip18 from "../Assets/strip18.png";
import MultiRangeSlider from "multi-range-slider-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function BuildingDetailsCard({ svg, Heading, subHeading }) {
  return (
    <div className="building__details__container__wrapper__card">
      {svg}

      <div className="building__details__container__wrapper__card__content">
        <div className="building__details__container__wrapper__card__content__top">
          {Heading}
        </div>
        <div className="building__details__container__wrapper__card__content__bottom">
          {subHeading}
        </div>
      </div>
    </div>
  );
}

function BuildingDimensionsEntry({ defaultChecked }) {
  return (
    <div className="apartment__details__container__wrapper__content__middle__entry__wrapper">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="apartment__details__container__wrapper__content__middle__entry__input"
        name="apartment__details__container__wrapper__content__middle__entry__input"
      />
      <div className="apartment__details__container__wrapper__content__middle__entry">
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            60 m <sup>2</sup>
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Space
          </div>
        </div>
        <div className="apartment__details__container__wrapper__content__middle__entry__bar"></div>
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            03
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Rooms
          </div>
        </div>
        <div className="apartment__details__container__wrapper__content__middle__entry__bar"></div>
        <div className="apartment__details__container__wrapper__content__middle__entry__content">
          <div className="apartment__details__container__wrapper__content__middle__entry__content__value">
            Rs 3000
          </div>
          <div className="apartment__details__container__wrapper__content__middle__entry__content__label">
            Per m <sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    photoGalleryImg1,
    photoGalleryImg2,
    photoGalleryImg3,
    photoGalleryImg4,
    photoGalleryImg5,
    photoGalleryImg6,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="photo__gallery__container__content">
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          alt="photo__gallery__container__content__img"
          className="photo__gallery__container__content__img"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
      isManagementFloorSelected: false,
      isSuitesFloorSelected: false,
      isServiceFloorSelected: false,
      isShopFloorSelected: false,
    };
  }
  componentDidMount() {
    this.setState({
      isManagementFloorSelected: this.props.selected === "commercial",
      isSuitesFloorSelected: this.props.selected === "suites",
      isServiceFloorSelected: this.props.selected === "services",
      isShopFloorSelected: this.props.selected === "apartments",
    });
  }
  render() {
    return (
      <>
        <Header />
        <div className="main__section__container">
          <img
            src={main__backgound}
            alt="main__background"
            className="main__section__container__img"
          />
          <div className="main__section__container__wrap">
            <div className="main__section__container__wrap__left">
              <div className="main__section__container__wrap__links">
                <Link
                  to="/home-commercial"
                  onClick={() => {
                    this.setState({
                      isManagementFloorSelected: true,
                      isSuitesFloorSelected: false,
                      isServiceFloorSelected: false,
                      isShopFloorSelected: false,
                    });
                  }}
                  className={
                    this.state.isManagementFloorSelected
                      ? "main__section__container__wrap__link main__section__container__wrap__link__active"
                      : "main__section__container__wrap__link"
                  }
                >
                  <img
                    src={ring}
                    alt="ring"
                    className="main__section__container__wrap__link__img"
                  />
                  <div className="main__section__container__wrap__link__text">
                    Commercial
                  </div>
                </Link>
                <Link
                  to="/home-services"
                  onClick={() => {
                    this.setState({
                      isManagementFloorSelected: false,
                      isSuitesFloorSelected: false,
                      isServiceFloorSelected: true,
                      isShopFloorSelected: false,
                    });
                  }}
                  className={
                    this.state.isServiceFloorSelected
                      ? "main__section__container__wrap__link main__section__container__wrap__link__active"
                      : "main__section__container__wrap__link"
                  }
                >
                  <img
                    src={ring}
                    alt="ring"
                    className="main__section__container__wrap__link__img"
                  />
                  <div className="main__section__container__wrap__link__text">
                    Hotel Services
                  </div>
                </Link>
                <Link
                  to="/home-suites"
                  onClick={() => {
                    this.setState({
                      isManagementFloorSelected: false,
                      isSuitesFloorSelected: true,
                      isServiceFloorSelected: false,
                      isShopFloorSelected: false,
                    });
                  }}
                  className={
                    this.state.isSuitesFloorSelected
                      ? "main__section__container__wrap__link main__section__container__wrap__link__active"
                      : "main__section__container__wrap__link"
                  }
                >
                  <img
                    src={ring}
                    alt="ring"
                    className="main__section__container__wrap__link__img"
                  />
                  <div className="main__section__container__wrap__link__text">
                    Hotel Suites
                  </div>
                </Link>
                <Link
                  to="/home-apartments"
                  onClick={() => {
                    this.setState({
                      isManagementFloorSelected: false,
                      isSuitesFloorSelected: false,
                      isServiceFloorSelected: false,
                      isShopFloorSelected: true,
                    });
                  }}
                  className={
                    this.state.isShopFloorSelected
                      ? "main__section__container__wrap__link main__section__container__wrap__link__active"
                      : "main__section__container__wrap__link"
                  }
                >
                  <img
                    src={ring}
                    alt="ring"
                    className="main__section__container__wrap__link__img"
                  />
                  <div className="main__section__container__wrap__link__text">
                    Retail Shop
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="youtube__video__container">
          <iframe
            src="https://www.youtube.com/embed/5ANSa-hJtXU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="hotel__services__container">
          <div className="hotel__services__container__content">
            <div className="hotel__services__container__content__left">
              <div className="hotel__services__container__content__heading heading">
                {this.props.selected === "commercial"
                  ? "Commercial"
                  : this.props.selected === "suites"
                  ? "Hotel Services"
                  : this.props.selected === "services"
                  ? "Hotel Suites"
                  : this.props.selected === "apartments"
                  ? "Retail Shop"
                  : null}
              </div>
              <div className="hotel__services__container__content__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                reprehenderit obcaecati, assumenda iusto velit aperiam beatae
                necessitatibus repellendus, asperiores rerum nisi est facere
                explicabo recusandae qui dolor quos harum ipsa fugit nemo
                soluta. Sunt quidem molestias perspiciatis sit, pariatur
                nesciunt aperiam deleniti! Magnam vel consequatur fugiat fugit
                delectus veniam quidem.
              </div>
              <div className="hotel__services__container__content__icons">
                <div className="hotel__services__container__content__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.246"
                    height="15.779"
                    viewBox="0 0 26.246 15.779"
                    fill="currentColor"
                  >
                    <path
                      id="Path_56"
                      data-name="Path 56"
                      d="M-2890.326,1125.59c.268-.5.515-.967.765-1.43q2.393-4.435,4.783-8.872a.416.416,0,0,1,.429-.257q5.584.01,11.167,0a.4.4,0,0,1,.415.238q2.66,4.954,5.333,9.9c.069.128.131.259.212.419Zm11.167-2.42v2.1h.776v-2.1Zm.714-.509v-2.1h-.661v2.1Zm-.048-2.617v-2.1h-.576c0,.56.007,1.1,0,1.648s.016.558.557.463C-2878.507,1120.055-2878.5,1120.047-2878.493,1120.043Zm-.492-4.7v2.1h.431v-2.1Z"
                      transform="translate(2891.895 -1109.835)"
                    />
                    <path
                      id="Path_57"
                      data-name="Path 57"
                      d="M-2894.2,1075.261v1.547h-1.146v2.784c-.524,0-1.014.008-1.5-.009-.069,0-.155-.115-.2-.2q-.6-1.146-1.187-2.3a.371.371,0,0,0-.379-.246q-8.7.009-17.391,0a.346.346,0,0,0-.363.22c-.387.771-.8,1.531-1.187,2.3a.368.368,0,0,1-.389.235c-.427-.013-.854,0-1.318,0v-2.746h-1.171v-1.588Z"
                      transform="translate(2920.436 -1072.136)"
                    />
                    <path
                      id="Path_58"
                      data-name="Path 58"
                      d="M-2745.079,1018.075h-8.929c.094-.179.173-.333.255-.485.338-.63.682-1.257,1.012-1.891a.337.337,0,0,1,.344-.212c1.9.006,3.8,0,5.695.008a.368.368,0,0,1,.279.113C-2745.971,1016.415-2745.535,1017.231-2745.079,1018.075Zm-4.584-.225c.179.055.27.02.258-.171-.015-.251-.015-.5-.035-.752,0-.055-.069-.1-.106-.157-.039.049-.109.1-.111.146C-2749.667,1017.22-2749.662,1017.526-2749.662,1017.85Zm.2-2.138c-.317.155-.147.412-.189.6-.01.046.076.114.117.172l.071-.043Z"
                      transform="translate(2762.673 -1015.474)"
                    />
                    <path
                      id="Path_59"
                      data-name="Path 59"
                      d="M-2548.116,1115.116c.274,0,.5-.015.716.008a.348.348,0,0,1,.222.163q1.711,2.98,3.41,5.967l2.36,4.136c.045.079.086.16.155.29-.362,0-.682.01-1-.009-.066,0-.142-.11-.184-.185q-2.067-3.755-4.126-7.513-.723-1.317-1.445-2.636C-2548.039,1115.282-2548.064,1115.224-2548.116,1115.116Z"
                      transform="translate(2567.5 -1109.912)"
                    />
                    <path
                      id="Path_60"
                      data-name="Path 60"
                      d="M-2913.616,1114.877c-.412.758-.8,1.475-1.191,2.189q-1.828,3.329-3.661,6.657c-.277.5-.547,1.012-.84,1.507a.471.471,0,0,1-.315.195,8.57,8.57,0,0,1-.864.009c.241-.43.458-.823.68-1.213,1.692-2.965,3.392-5.925,5.068-8.9.2-.357.417-.532.819-.461A2.768,2.768,0,0,0-2913.616,1114.877Z"
                      transform="translate(2920.486 -1109.661)"
                    />
                    <path
                      id="Path_61"
                      data-name="Path 61"
                      d="M-2774.136,1015.288c-.462.84-.907,1.651-1.357,2.458a.212.212,0,0,1-.144.1c-.219.011-.438,0-.707,0,.315-.556.605-1.069.9-1.581.1-.177.205-.352.306-.529C-2774.827,1015.187-2774.827,1015.187-2774.136,1015.288Z"
                      transform="translate(2783.848 -1015.236)"
                    />
                    <path
                      id="Path_62"
                      data-name="Path 62"
                      d="M-2599.784,1018.177c-.271,0-.484.008-.694-.005a.246.246,0,0,1-.169-.11c-.437-.786-.868-1.576-1.3-2.366-.011-.021,0-.053,0-.111.2,0,.388-.009.58.006a.255.255,0,0,1,.169.116C-2600.735,1016.508-2600.278,1017.313-2599.784,1018.177Z"
                      transform="translate(2618.534 -1015.564)"
                    />
                  </svg>
                </div>
                <div className="hotel__services__container__content__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29.699"
                    height="29.59"
                    viewBox="0 0 29.699 29.59"
                    fill="currentColor"
                  >
                    <g
                      id="Group_95"
                      data-name="Group 95"
                      transform="translate(-367.334 -2267.865)"
                    >
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M-1918.507,1025.129a7.854,7.854,0,0,1-7.859,7.867,7.853,7.853,0,0,1-7.851-7.868,7.862,7.862,0,0,1,7.841-7.855A7.861,7.861,0,0,1-1918.507,1025.129Zm-7.866-3.894a3.9,3.9,0,0,0-3.91,3.909,3.91,3.91,0,0,0,3.958,3.894,3.9,3.9,0,0,0,3.877-3.914A3.894,3.894,0,0,0-1926.373,1021.235Zm5.7,6.41a.591.591,0,0,0,.457-.634.3.3,0,0,0-.324-.31c-.22,0-.45.314-.436.619A.3.3,0,0,0-1920.677,1027.645Zm.768-2.354c-.024-.123-.009-.275-.078-.343a.446.446,0,0,0-.355-.124c-.273.074-.269.339-.239.55a.59.59,0,0,0,.241.374c.066.042.261-.041.342-.123S-1919.936,1025.4-1919.91,1025.29Zm-8.675-5.963a.3.3,0,0,0,.34.319c.348,0,.668-.228.6-.433a.5.5,0,0,0-.327-.3C-1928.3,1018.871-1928.592,1019.1-1928.584,1019.328Zm4.435,11.63a.327.327,0,0,0-.329-.339c-.334,0-.641.2-.627.426a.324.324,0,0,0,.321.323C-1924.478,1031.4-1924.155,1031.179-1924.149,1030.957Zm-5.481-.772c0-.33-.405-.667-.627-.617a.3.3,0,0,0-.261.362c.022.185.406.526.579.476A1.007,1.007,0,0,0-1929.63,1030.185Zm-2-8.529a1,1,0,0,0,.313.213c.181.048.518-.342.518-.564a.305.305,0,0,0-.3-.333C-1931.308,1020.952-1931.637,1021.324-1931.634,1021.657Zm10.7.235c0-.33-.3-.713-.494-.694a.335.335,0,0,0-.334.338c-.006.2.357.62.517.573A1.031,1.031,0,0,0-1920.932,1021.892Zm-10.819,1.04a.3.3,0,0,0-.323-.3c-.218-.007-.445.309-.433.62a.3.3,0,0,0,.308.322C-1931.966,1023.584-1931.764,1023.309-1931.751,1022.931Zm7.276-3.939a.324.324,0,0,0-.346.318c0,.219.3.413.628.419a.3.3,0,0,0,.326-.3C-1923.842,1019.213-1924.152,1019-1924.476,1018.992Zm-5.6,1.521c.334,0,.7-.3.688-.5a.32.32,0,0,0-.334-.332c-.217,0-.61.343-.565.518A.971.971,0,0,0-1930.073,1020.513Zm9.607,3.338a.3.3,0,0,0,.32-.333c0-.331-.174-.609-.392-.613s-.345.106-.333.316C-1920.853,1023.515-1920.739,1023.874-1920.465,1023.851Zm-2.041-3.161a.289.289,0,0,0,.287-.316.727.727,0,0,0-.561-.525.3.3,0,0,0-.325.333C-1923.1,1020.383-1922.747,1020.694-1922.506,1020.69Zm.573,8.332a.314.314,0,0,0,.336.287c.2,0,.508-.377.5-.593a.3.3,0,0,0-.319-.312C-1921.612,1028.391-1921.935,1028.762-1921.933,1029.021Zm-.736.739c-.337,0-.695.305-.685.5a.315.315,0,0,0,.312.325c.22.019.634-.336.586-.522A.948.948,0,0,0-1922.668,1029.76Zm-9.677-3.357c-.049.048-.175.121-.222.229a.67.67,0,0,0,.25.673.428.428,0,0,0,.3,0c.213-.118.166-.315.11-.511S-1932.013,1026.416-1932.345,1026.4Zm-.456-1.492c0,.4.113.561.337.553.2-.007.319-.173.322-.467,0-.074.025-.166-.01-.218-.065-.1-.157-.23-.252-.243a.47.47,0,0,0-.341.144C-1932.809,1024.745-1932.8,1024.886-1932.8,1024.911Zm1.212,3.242a.913.913,0,0,0-.2.286c-.053.182.221.561.4.6a.307.307,0,0,0,.4-.208C-1930.91,1028.6-1931.241,1028.145-1931.589,1028.153Zm5.39-8.774a1.139,1.139,0,0,0,.357-.123.286.286,0,0,0,.026-.442.694.694,0,0,0-.774-.035.294.294,0,0,0,0,.464A1.23,1.23,0,0,0-1926.2,1019.379Zm-2.311,11.16c-.219-.007-.352.1-.36.286-.011.259.216.383.6.44.212.031.329-.107.348-.306S-1928.185,1030.55-1928.51,1030.539Zm2.063.386c-.15,0-.251-.03-.291.006-.1.095-.256.223-.251.331.015.31.287.3.515.313s.417-.042.421-.282c0-.117-.13-.251-.229-.349C-1926.327,1030.9-1926.441,1030.926-1926.447,1030.925Z"
                        transform="translate(2308.548 1257.614)"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M-2065.424,894.846c-.9,0-1.8,0-2.7,0a.544.544,0,0,1-.295-.044.455.455,0,0,1-.2-.291.466.466,0,0,1,.184-.329.7.7,0,0,1,.374-.065c1.606,0,3.213-.006,4.819,0a.371.371,0,0,0,.421-.277,9.548,9.548,0,0,1,5.694-5.638.337.337,0,0,0,.261-.376c-.01-1.607-.006-3.213-.006-4.82,0-.4.13-.605.382-.6s.351.189.351.592c0,1.783,0,3.566.006,5.349a.322.322,0,0,1-.271.364,8.823,8.823,0,0,0-5.913,5.845.351.351,0,0,1-.4.291C-2063.623,894.837-2064.524,894.846-2065.424,894.846Z"
                        transform="translate(2435.956 1385.456)"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M-2062.413,1212.18a9.117,9.117,0,0,0,1.683,3.331,8.821,8.821,0,0,0,4.358,2.951.328.328,0,0,1,.283.381c-.012,1.746-.006,3.492-.008,5.239a.542.542,0,0,1-.039.3.5.5,0,0,1-.311.216.466.466,0,0,1-.321-.2.645.645,0,0,1-.058-.348c0-1.57-.006-3.139,0-4.709a.319.319,0,0,0-.246-.358,9.523,9.523,0,0,1-5.779-5.838.315.315,0,0,0-.358-.244c-1.616.007-3.232,0-4.848,0-.093,0-.21.024-.272-.023-.107-.08-.241-.2-.248-.314a.532.532,0,0,1,.207-.341.485.485,0,0,1,.293-.053q2.744,0,5.489,0C-2062.531,1212.171-2062.476,1212.177-2062.413,1212.18Z"
                        transform="translate(2435.911 1072.862)"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M-1728.763,894.892c-.919,0-1.839,0-2.758,0a.256.256,0,0,1-.294-.209,8.892,8.892,0,0,0-6.055-6.028.218.218,0,0,1-.186-.25c0-1.848,0-3.7,0-5.545,0-.29.149-.471.365-.474s.366.178.366.494c0,1.644,0,3.288,0,4.932a.318.318,0,0,0,.246.358,9.547,9.547,0,0,1,5.76,5.752.353.353,0,0,0,.4.267c1.579-.008,3.157,0,4.736,0a.753.753,0,0,1,.355.025c.116.07.259.212.26.324s-.139.256-.252.333c-.078.053-.216.021-.327.021Z"
                        transform="translate(2122.598 1385.476)"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M-1738.087,1223.16c0-.892,0-1.783,0-2.675a.256.256,0,0,1,.213-.292,8.839,8.839,0,0,0,6.033-6.042.231.231,0,0,1,.263-.18q2.772.005,5.545,0c.065,0,.154-.016.189.019.1.1.252.224.25.337s-.144.259-.261.324a.868.868,0,0,1-.384.021c-1.579,0-3.158,0-4.737,0a.321.321,0,0,0-.363.242,9.56,9.56,0,0,1-5.8,5.789.285.285,0,0,0-.219.32c.007,1.579,0,3.158,0,4.737,0,.093.026.212-.021.272-.087.113-.211.251-.333.265-.1.011-.25-.119-.328-.223a.583.583,0,0,1-.049-.322C-1738.089,1224.888-1738.087,1224.024-1738.087,1223.16Z"
                        transform="translate(2122.631 1071.156)"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M-1789.742,936.42c0,.259-.153.44-.363.439a.408.408,0,0,1-.37-.442.406.406,0,0,1,.386-.453C-1789.878,935.977-1789.74,936.157-1789.742,936.42Z"
                        transform="translate(2172.289 1334.69)"
                      />
                      <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M-1789.739,972.713c0,.271-.13.44-.348.447a.4.4,0,0,1-.385-.449.384.384,0,0,1,.372-.427C-1789.873,972.285-1789.74,972.443-1789.739,972.713Z"
                        transform="translate(2172.285 1300.26)"
                      />
                      <path
                        id="Path_41"
                        data-name="Path 41"
                        d="M-1983.477,1160.437c-.262,0-.437-.145-.438-.359a.408.408,0,0,1,.461-.374.39.39,0,0,1,.421.383C-1983.039,1160.3-1983.212,1160.438-1983.477,1160.437Z"
                        transform="translate(2355.659 1122.596)"
                      />
                      <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M-1789.743,1359.669c0,.27-.127.442-.343.449a.385.385,0,0,1-.39-.413.409.409,0,0,1,.367-.469C-1789.9,1359.232-1789.747,1359.408-1789.743,1359.669Z"
                        transform="translate(2172.29 933.451)"
                      />
                      <path
                        id="Path_43"
                        data-name="Path 43"
                        d="M-1789.737,900.489c0,.268-.139.422-.368.42a.381.381,0,0,1-.365-.431.393.393,0,0,1,.363-.441C-1789.878,900.031-1789.734,900.207-1789.737,900.489Z"
                        transform="translate(2172.284 1368.747)"
                      />
                      <path
                        id="Path_44"
                        data-name="Path 44"
                        d="M-1789.743,1395.746c0,.26-.139.444-.349.455a.409.409,0,0,1-.384-.456.4.4,0,0,1,.372-.438C-1789.889,1395.307-1789.745,1395.482-1789.743,1395.746Z"
                        transform="translate(2172.29 899.258)"
                      />
                      <path
                        id="Path_45"
                        data-name="Path 45"
                        d="M-2055.574,1160.437c-.265,0-.44-.132-.449-.347a.392.392,0,0,1,.419-.386.407.407,0,0,1,.466.369C-2055.137,1160.286-2055.314,1160.434-2055.574,1160.437Z"
                        transform="translate(2424.015 1122.597)"
                      />
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-2019.366,1160.44c-.275,0-.431-.126-.434-.353a.381.381,0,0,1,.42-.379c.272-.007.451.144.447.378S-2019.088,1160.44-2019.366,1160.44Z"
                        transform="translate(2389.676 1122.593)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-1789.741,1432.1c0,.281-.116.419-.355.421s-.384-.158-.378-.436a.376.376,0,0,1,.379-.415C-1789.865,1431.675-1789.741,1431.826-1789.741,1432.1Z"
                        transform="translate(2172.288 864.787)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-1603.745,1161.573c.281.008.434.131.436.35s-.182.359-.493.35c-.248-.008-.4-.15-.392-.365S-1604.016,1161.565-1603.745,1161.573Z"
                        transform="translate(1995.704 1120.825)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-1531.6,1161.563c.247,0,.408.135.412.344s-.157.357-.426.357c-.291,0-.463-.135-.457-.357S-1531.9,1161.562-1531.6,1161.563Z"
                        transform="translate(1927.34 1120.834)"
                      />
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M-1567.551,1161.555c.3,0,.451.118.447.359,0,.222-.141.338-.406.342-.314.005-.457-.1-.46-.343S-1567.831,1161.558-1567.551,1161.555Z"
                        transform="translate(1961.366 1120.842)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="hotel__services__container__content__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29.642"
                    height="16.234"
                    viewBox="0 0 29.642 16.234"
                    fill="currentColor"
                  >
                    <g
                      id="Group_96"
                      data-name="Group 96"
                      transform="translate(-445.95 -2274.576)"
                    >
                      <path
                        id="Path_52"
                        data-name="Path 52"
                        d="M-1187.051,1020.994c-1.429.547-2.8,1.01-4.119,1.59a3.969,3.969,0,0,1-4.383-.661q-2.636-2.11-5.245-4.254c-.567-.463-.521-.746.152-1a5.432,5.432,0,0,1,3.081-.686,7.151,7.151,0,0,1,2.044.757c.925.53,1.767,1.2,2.658,1.794a.665.665,0,0,0,.527.112c1.627-.774,3.24-1.576,4.939-2.41-.245-.168-.428-.3-.618-.423-1.176-.761-2.355-1.517-3.529-2.281-.613-.4-.6-.634.025-1.029,1.711-1.075,1.709-1.07,3.6-.36,1.551.581,3.1,1.16,4.665,1.708a1.114,1.114,0,0,0,.763-.046c1.137-.528,2.25-1.109,3.381-1.649a7.972,7.972,0,0,1,6.133-.407,1.893,1.893,0,0,1,1.422,1.718,1.891,1.891,0,0,1-1.269,1.832c-2.337.941-4.685,1.853-7.018,2.8a1.566,1.566,0,0,0-.721.6q-2.428,4.118-4.8,8.269a.984.984,0,0,1-1.008.586c-.756-.033-1.514,0-2.272-.011-.618-.007-.768-.217-.555-.791.673-1.809,1.355-3.615,2.033-5.422C-1187.128,1021.246-1187.106,1021.164-1187.051,1020.994Zm-1.288,5.744c.626,0,1.144-.03,1.656.009a.776.776,0,0,0,.819-.483c.8-1.426,1.633-2.837,2.453-4.254l2.617-4.526c-.218.07-.335.1-.446.144-1.3.512-2.6,1.011-3.888,1.554a1.174,1.174,0,0,0-.57.58c-.466,1.137-.885,2.294-1.318,3.445S-1187.876,1025.5-1188.339,1026.738Zm4.492-12.26c-1.745-.637-3.41-1.164-5-1.86a1.678,1.678,0,0,0-1.965.441c1.363.88,2.688,1.743,4.026,2.585a.6.6,0,0,0,.491.029C-1185.512,1015.314-1184.744,1014.921-1183.847,1014.478Z"
                        transform="translate(1647.14 1263.26)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="hotel__services__container__content__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.179"
                    height="24.486"
                    viewBox="0 0 24.179 24.486"
                    fill="currentColor"
                  >
                    <g
                      id="Group_97"
                      data-name="Group 97"
                      transform="translate(-528.11 -2268.501)"
                    >
                      <path
                        id="Path_54"
                        data-name="Path 54"
                        d="M-275.037,902.21c-.25-1.475.8-1.261,1.671-1.281,0-1.291,0-2.533,0-3.774a1.828,1.828,0,0,1,1.777-2.064,60.426,60.426,0,0,1,9.727-.44c1.961.075,3.918.239,5.875.385a3.516,3.516,0,0,1,1.1.254A1.7,1.7,0,0,1-253.805,897c-.008,1.159.014,2.318-.01,3.477-.008.384.12.514.485.463a2.329,2.329,0,0,1,.381,0c.558.016.8.251.818.8,0,.14,0,.281,0,.414.639.238.639.238.639.943,0,.721-.009,1.442,0,2.163.007.408-.158.607-.575.586-.282-.014-.564-.016-.847-.015a.378.378,0,0,1-.417-.424q-.011-1.357,0-2.714c0-.375.285-.445.653-.479-.034-.222-.014-.585-.108-.617a2.847,2.847,0,0,0-.909-.069c-.037,0-.1.128-.106.2a3.306,3.306,0,0,0-.009.423q0,7.145,0,14.291c0,.81-.119.983-.886,1.279,0,.265.007.545,0,.824-.009.307-.134.514-.481.514-.633,0-1.267.008-1.9.008-.384,0-.508-.243-.513-.582,0-.251,0-.5,0-.773H-269.6c0,.288,0,.553,0,.818a.476.476,0,0,1-.5.556c-.621.016-1.243.013-1.865,0a.482.482,0,0,1-.511-.508,6.021,6.021,0,0,0-.018-.634.431.431,0,0,0-.2-.3,1,1,0,0,1-.674-1.1q.009-7.251,0-14.5v-.523c-.18-.009-.318-.021-.455-.022-.661,0-.661,0-.608.713.505-.006.6.307.581.75-.025.762,0,1.526-.008,2.29,0,.511-.075.583-.6.588-.268,0-.537,0-.805-.009a.376.376,0,0,1-.408-.429c0-.891.01-1.781,0-2.672C-275.672,902.323-275.411,902.245-275.037,902.21Zm11.458-2.663q-3.857,0-7.714,0c-.85,0-1.125.276-1.125,1.11q0,4.261,0,8.521c0,.926.258,1.209,1.174,1.277,1.774.132,3.546.3,5.322.382a64.308,64.308,0,0,0,10.192-.406c.75-.084,1-.4,1-1.154q0-4.282,0-8.564c0-.873-.3-1.167-1.174-1.167Zm-.03-.935h1.144c1.582,0,3.165,0,4.747,0,.385,0,.687-.1.7-.543.019-.508.019-1.018,0-1.526a.481.481,0,0,0-.5-.514c-.169,0-.338-.027-.506-.027q-5.574,0-11.147,0c-.141,0-.283,0-.424.008a.517.517,0,0,0-.547.567c0,.424,0,.848,0,1.272,0,.646.117.76.775.761Q-266.491,898.615-263.609,898.613Zm.047,17.093c-.762,0-1.525.018-2.287-.007-.435-.014-.427.239-.429.543s.029.507.427.5q2.265-.028,4.531,0c.4,0,.428-.195.423-.5s.022-.56-.421-.544C-262.064,915.725-262.813,915.705-263.561,915.705Zm-8.008-2.769a.8.8,0,0,0-.848.838.813.813,0,0,0,.848.845.816.816,0,0,0,.85-.844A.807.807,0,0,0-271.569,912.936Zm13.532.218a.863.863,0,0,0-.886.827.9.9,0,0,0,.85.879.886.886,0,0,0,.885-.842A.861.861,0,0,0-258.038,913.154Zm2.417,1.464a.843.843,0,0,0,.881-.829.846.846,0,0,0-.848-.863.845.845,0,0,0-.879.83A.843.843,0,0,0-255.621,914.619Zm-12.655-.607a.844.844,0,0,0-.829-.879.843.843,0,0,0-.853.854.839.839,0,0,0,.828.878A.84.84,0,0,0-268.276,914.012Z"
                        transform="translate(803.777 1373.891)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <button className="heading hotel__services__container__content__button">
                View Details
              </button>
              <div className="hotel__services__container__content__gallery">
                <img
                  src={photoGalleryImg1}
                  alt="photoGalleryImg"
                  className="hotel__services__container__content__gallery__img"
                />
                <img
                  src={photoGalleryImg2}
                  alt="photoGalleryImg"
                  className="hotel__services__container__content__gallery__img"
                />
                <img
                  src={photoGalleryImg3}
                  alt="photoGalleryImg"
                  className="hotel__services__container__content__gallery__img"
                />
              </div>
            </div>
            <div className="hotel__services__container__content__right">
              <img
                src={buildingwhole}
                alt="buildingwhole"
                className="hotel__services__container__building"
              />
              <div className="hotel__services__container__building__btns">
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isManagementFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  1
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section1"
                    defaultChecked={true}
                    // disabled={!this.state.isManagementFloorSelected}

                    id=""
                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip1}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  12
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    defaultChecked={true}
                    // disabled={!this.state.isSuitesFloorSelected}
                    // defaultChecked{this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip2}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  11
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip3}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  10
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip4}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  9
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip5}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  8
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip6}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  7
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip7}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  6
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip8}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  5
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip9}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  4
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip10}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  3
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                  <img
                    src={strip11}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  2
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip12}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isSuitesFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  1
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section2"
                    id=""
                    // disabled={!this.state.isSuitesFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip13}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isServiceFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  4
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section3"
                    id=""
                    defaultChecked={true}
                    // disabled={!this.state.isServiceFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip14}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isServiceFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  3
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section3"
                    id=""
                    // disabled={!this.state.isServiceFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip15}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isServiceFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  2
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section3"
                    id=""
                    // disabled={!this.state.isServiceFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip16}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isServiceFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  1
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section3"
                    id=""
                    // disabled={!this.state.isServiceFloorSelected}

                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip17}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
                <button
                  className="heading hotel__services__container__building__btn"
                  style={
                    this.state.isShopFloorSelected === false
                      ? { opacity: 0, userSelect: "none", visibility: "hidden" }
                      : null
                  }
                >
                  1
                  <input
                    type="radio"
                    name="hotel__services__container__building__btn__section4"
                    id=""
                    // disabled={!this.state.isShopFloorSelected}
                    defaultChecked={true}
                    className="hotel__services__container__building__btn__input"
                  />
                  <img
                    src={strip18}
                    alt="strip"
                    className="hotel__services__container__strip1"
                  />
                  <div className="hotel__services__container__building__btn__popup">
                    <div className="hotel__services__container__building__btn__popup__heading">
                      13th Floor
                    </div>
                    <div className="hotel__services__container__building__btn__popup__status">
                      <span>11/14 Free</span>
                      <span>Apartment</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="apartment__details__container">
          <img
            src={ring}
            alt="ring"
            className="apartment__details__container__img"
          />
          <div className="apartment__details__container__wrapper">
            <form className="apartment__details__container__wrapper__content">
              <div className="apartment__details__container__wrapper__content__left">
                <div className="apartment__details__container__wrapper__content__left__heading heading">
                  Choose your Preferred floor or use filter selection
                </div>
                <div className="apartment__details__container__wrapper__content__left__row">
                  <div className="apartment__details__container__wrapper__content__left__sub__heading heading">
                    Rooms
                  </div>
                  <select
                    name=""
                    id=""
                    className="apartment__details__container__wrapper__content__left__select"
                  >
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                  </select>
                </div>
                <div className="apartment__details__container__wrapper__content__left__range">
                  <div className="apartment__details__container__wrapper__content__left__range__heading heading">
                    Rooms
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={100}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                  />
                </div>
                <div className="apartment__details__container__wrapper__content__left__range">
                  <div className="apartment__details__container__wrapper__content__left__range__heading heading">
                    Rooms
                  </div>
                  <MultiRangeSlider
                    min={0}
                    max={100}
                    ruler={false}
                    label={true}
                    preventWheel={false}
                  />
                </div>
                <button className="heading apartment__details__container__wrapper__content__left__button">
                  View Details
                </button>
              </div>
              <div className="apartment__details__container__wrapper__content__middle">
                <BuildingDimensionsEntry defaultChecked={true} />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
                <BuildingDimensionsEntry />
              </div>
              <div className="apartment__details__container__wrapper__content__right">
                <div className="apartment__details__container__wrapper__content__right__heading heading">
                  Apartments - Comforts
                </div>
                <img
                  src={apartmentPic}
                  alt="apartmentPic"
                  className="apartment__details__container__wrapper__content__right__img"
                />
                <div className="apartment__details__container__wrapper__content__right__tabs">
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      defaultChecked={true}
                    />

                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content heading">
                      Visual
                    </div>
                  </div>
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                    />
                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content heading">
                      Plan
                    </div>
                  </div>
                  <div className="apartment__details__container__wrapper__content_right__tabs__entry">
                    <input
                      type="radio"
                      className="apartment__details__container__wrapper__content_right__tabs__entry__input"
                      name="apartment__details__container__wrapper__content_right__tabs__entry__input"
                    />

                    <div className="apartment__details__container__wrapper__content_right__tabs__entry__content heading">
                      Flor
                    </div>
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
                <div className="apartment__details__container__wrapper__content__right__data__row">
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Total Area
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    60m <sup>2</sup>
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__label">
                    Tower
                  </div>
                  <div className="apartment__details__container__wrapper__content__right__data__row__value">
                    East
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="banner__container">
          <img
            src={bannerImg}
            alt="bannerImg"
            className="banner__container__img"
          />
          <div className="banner__container__content">
            <div className="banner__content__wrapper">
              <div className="banner__container__content__heading heading">
                A PLACE WHERE HOSPITALITY WELCOMES YOU.
              </div>
              <button className="heading banner__container__content__btn">
                View Details
              </button>
              <div className="banner__container__content__logo__container">
                <img
                  src={ring}
                  alt="ring"
                  className="banner__container__content__logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="building__details__container">
          <div className="building__details__container__wrapper">
            <div className="building__details__container__wrapper__content">
              <div className="building__details__container__wrapper__content__left">
                <img
                  src={BuildingDetailPic}
                  alt="BuildingDetailPic"
                  className="building__details__container__content__img"
                />
              </div>
              <div className="building__details__container__wrapper__content__right">
                <div className="building__details__container__wrapper__heading heading">
                  Building Details
                </div>
                <div className="building__details__container__wrapper__heading__line"></div>
                <div className="building__details__container__wrapper__content__entries">
                  <BuildingDetailsCard
                    Heading="Plot Size"
                    subHeading="13 Kanals"
                    svg={
                      <svg
                        id="measure_2_"
                        data-name="measure (2)"
                        xmlns="http://www.w3.org/2000/svg"
                        width="55.232"
                        height="55.232"
                        fill="currentColor"
                        viewBox="0 0 55.232 55.232"
                      >
                        <path
                          id="Path_66"
                          data-name="Path 66"
                          d="M53.56,44.679h-34.1a9.76,9.76,0,0,0-8.9-8.9V1.673A1.674,1.674,0,0,0,8.882,0H1.672A1.674,1.674,0,0,0,0,1.673V9.914a.809.809,0,0,0,1.618,0V1.673a.054.054,0,0,1,.054-.054h7.21a.054.054,0,0,1,.054.054v1.9H6.17a.809.809,0,1,0,0,1.618H8.936V7.149h-.95a.809.809,0,1,0,0,1.618h.95v1.956H6.17a.809.809,0,1,0,0,1.618H8.936V14.3h-.95a.809.809,0,1,0,0,1.618h.95v1.956H6.17a.809.809,0,1,0,0,1.618H8.936v1.956h-.95a.809.809,0,1,0,0,1.618h.95v1.957H6.17a.809.809,0,1,0,0,1.618H8.936v1.956h-.95a.809.809,0,1,0,0,1.618h.95v1.957H6.17a.809.809,0,1,0,0,1.618H8.936v1.956H1.618V13.15A.809.809,0,0,0,0,13.15V52.637a2.6,2.6,0,0,0,2.6,2.6H53.56a1.674,1.674,0,0,0,1.672-1.672v-7.21A1.674,1.674,0,0,0,53.56,44.679ZM1.618,52.637V37.362H9.745a8.136,8.136,0,0,1,8.127,8.127h0v8.127H2.6a.979.979,0,0,1-.978-.978Zm52,.924a.054.054,0,0,1-.054.054H19.49V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3H25.02v.95a.809.809,0,0,0,1.618,0V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3h1.956v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3h1.957v2.765a.809.809,0,0,0,1.618,0V46.3h1.956v.95a.809.809,0,0,0,1.618,0V46.3H50.04v2.765a.809.809,0,0,0,1.618,0V46.3h1.9a.054.054,0,0,1,.054.054Z"
                          transform="translate(0 -0.001)"
                        />
                        <path
                          id="Path_67"
                          data-name="Path 67"
                          d="M68.864,397.6a2.6,2.6,0,1,0,2.6,2.6A2.6,2.6,0,0,0,68.864,397.6Zm0,3.574a.978.978,0,1,1,.978-.978A.979.979,0,0,1,68.864,401.174Z"
                          transform="translate(-59.119 -354.709)"
                        />
                        <path
                          id="Path_68"
                          data-name="Path 68"
                          d="M39.3,364.467a6.17,6.17,0,1,0,6.17,6.17A6.177,6.177,0,0,0,39.3,364.467Zm0,10.723a4.552,4.552,0,1,1,4.552-4.552A4.558,4.558,0,0,1,39.3,375.19Z"
                          transform="translate(-29.56 -325.15)"
                        />
                        <path
                          id="Path_69"
                          data-name="Path 69"
                          d="M208.17,113.215a.806.806,0,0,0,.537-.2l2.314-2.056a.809.809,0,1,0-1.075-1.209l-2.314,2.057a.809.809,0,0,0,.538,1.414Z"
                          transform="translate(-184.992 -97.724)"
                        />
                        <path
                          id="Path_70"
                          data-name="Path 70"
                          d="M254.848,71.723a.806.806,0,0,0,.537-.2l2.314-2.057a.809.809,0,0,0-1.075-1.209L254.31,70.31a.809.809,0,0,0,.538,1.414Z"
                          transform="translate(-226.634 -60.708)"
                        />
                        <path
                          id="Path_71"
                          data-name="Path 71"
                          d="M166.477,156.852h1.9a1.431,1.431,0,0,0-1.017-2.675l-1.419,1.262a.809.809,0,0,0,.537,1.414Z"
                          transform="translate(-147.796 -137.362)"
                        />
                        <path
                          id="Path_72"
                          data-name="Path 72"
                          d="M228.39,166.476a.809.809,0,0,0-.809-.809h-3.539a.809.809,0,0,0,0,1.618h3.539A.809.809,0,0,0,228.39,166.476Z"
                          transform="translate(-199.152 -147.796)"
                        />
                        <path
                          id="Path_73"
                          data-name="Path 73"
                          d="M293.832,39.148h1.537V41.1h-.978a.809.809,0,1,0,0,1.618h3.574a.809.809,0,1,0,0-1.618h-.978V39.148h3.828a.809.809,0,1,0,0-1.618h-3.828V19.489h10.892V37.53h-3.828a.809.809,0,0,0,0,1.618h4.637a.809.809,0,0,0,.809-.809V19.489h2.765a.809.809,0,0,0,.538-1.414L296.987,4.02v-2.4h.978a.809.809,0,1,0,0-1.618h-3.574a.809.809,0,1,0,0,1.618h.978v2.4l-1.148,1.02A.809.809,0,1,0,295.3,6.249l.073-.065V17.871h-1.09a.809.809,0,0,0,0,1.618h1.09V37.53h-1.537a.809.809,0,0,0,0,1.618Zm16.3-21.277H296.987V6.185Z"
                          transform="translate(-261.413 0)"
                        />
                        <path
                          id="Path_74"
                          data-name="Path 74"
                          d="M247.318,349.518h2.3a.809.809,0,1,0,0-1.618h-2.3a.809.809,0,0,0,0,1.618Z"
                          transform="translate(-219.917 -310.37)"
                        />
                        <path
                          id="Path_75"
                          data-name="Path 75"
                          d="M199.609,330.12h2.346a.809.809,0,1,0,0-1.618h-1.537v-1.537a.809.809,0,1,0-1.618,0v2.346A.809.809,0,0,0,199.609,330.12Z"
                          transform="translate(-177.354 -290.972)"
                        />
                        <path
                          id="Path_76"
                          data-name="Path 76"
                          d="M199.609,258.291a.809.809,0,0,0,.809-.809V253.87a.809.809,0,0,0-1.618,0v3.612A.809.809,0,0,0,199.609,258.291Z"
                          transform="translate(-177.354 -225.762)"
                        />
                        <path
                          id="Path_77"
                          data-name="Path 77"
                          d="M199.609,194.481a.809.809,0,0,0,.809-.809v-2.346a.809.809,0,1,0-1.618,0v2.346A.809.809,0,0,0,199.609,194.481Z"
                          transform="translate(-177.354 -169.965)"
                        />
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Building Covered Area"
                    subHeading="875000 Sq. ft"
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="55.232"
                        height="55.232"
                        viewBox="0 0 55.232 55.232"
                        fill="currentColor"
                      >
                        <g
                          id="measure_3_"
                          data-name="measure (3)"
                          transform="translate(0)"
                        >
                          <path
                            id="Path_80"
                            data-name="Path 80"
                            d="M98.762,19.66h-.978V18.68a.809.809,0,0,0-1.618,0v.979h-.978a.809.809,0,0,0-.809.809v2.68a.085.085,0,0,1-.085.085H88.039a.809.809,0,0,0-.809.809v.978h-.978a.809.809,0,1,0,0,1.618h.978v.978a.809.809,0,0,0,.809.809h6.255a.085.085,0,0,1,.085.084v14.3a.085.085,0,0,1-.085.084H78.21a.085.085,0,0,1-.084-.084V38.339a.809.809,0,0,0-.809-.809h-.978v-.978a.809.809,0,1,0-1.618,0v.978h-.978a.809.809,0,0,0-.809.809v4.468a.085.085,0,0,1-.084.084H56.764a.085.085,0,0,1-.084-.084V28.51a.085.085,0,0,1,.084-.084H72.848a.085.085,0,0,1,.084.084V31.19a.809.809,0,0,0,.809.809h.978v.978a.809.809,0,1,0,1.618,0V32h.978a.809.809,0,0,0,.809-.809V28.51a.085.085,0,0,1,.084-.084H80.89a.809.809,0,0,0,.809-.809v-.978h.978a.809.809,0,0,0,0-1.618H81.7v-.978a.809.809,0,0,0-.809-.809H78.21a.085.085,0,0,1-.084-.085V20.468a.809.809,0,0,0-.809-.809h-.978V18.68a.809.809,0,1,0-1.618,0v.978h-.978a.809.809,0,0,0-.809.809v2.681a.085.085,0,0,1-.084.085H64.867a.809.809,0,0,0,0,1.618h7.981a1.7,1.7,0,0,0,1.7-1.7V21.277h1.956v1.872a1.7,1.7,0,0,0,1.7,1.7h1.872v1.956H78.21a1.7,1.7,0,0,0-1.7,1.7v1.872H74.551V28.51a1.7,1.7,0,0,0-1.7-1.7H56.764a1.7,1.7,0,0,0-1.7,1.7v14.3a1.7,1.7,0,0,0,1.7,1.7H72.848a1.7,1.7,0,0,0,1.7-1.7V39.148h1.956v3.659a1.7,1.7,0,0,0,1.7,1.7H94.294a1.7,1.7,0,0,0,1.7-1.7V28.51a1.7,1.7,0,0,0-1.7-1.7H88.848V24.851h5.446a1.7,1.7,0,0,0,1.7-1.7v-1.87h1.956v25.1a.085.085,0,0,1-.084.084H53.19a.085.085,0,0,1-.084-.084V1.7a.085.085,0,0,1,.084-.084H88.208a.809.809,0,1,0,0-1.618H53.19a1.694,1.694,0,0,0-.532.086A.8.8,0,0,0,52.3,0H50.509a.809.809,0,0,0,0,1.618h.982c0,.028,0,.056,0,.084V46.381c0,.028,0,.056,0,.084h-.982a.809.809,0,1,0,0,1.618h.978v.978a.809.809,0,1,0,1.618,0v-.982c.028,0,.056,0,.084,0H97.868c.028,0,.056,0,.084,0v.982a.809.809,0,1,0,1.618,0V47.274a.8.8,0,0,0-.086-.362,1.694,1.694,0,0,0,.086-.532V20.469a.809.809,0,0,0-.809-.809Z"
                            transform="translate(-44.339 0)"
                          />
                          <path
                            id="Path_81"
                            data-name="Path 81"
                            d="M142.207,0h-6.424a.809.809,0,1,0,0,1.618h6.424a.085.085,0,0,1,.084.084V12.512h-.944l-.034,0-.035,0h-.944V5.277a1.7,1.7,0,0,0-1.7-1.7H122.548a1.7,1.7,0,0,0-1.7,1.7V12.51h-1.956V5.277a1.7,1.7,0,0,0-1.7-1.7H101.1a1.7,1.7,0,0,0-1.7,1.7V23.148a1.7,1.7,0,0,0,1.7,1.7h4.867a.809.809,0,0,0,0-1.618H101.1a.085.085,0,0,1-.084-.085V5.277a.085.085,0,0,1,.084-.085h16.084a.085.085,0,0,1,.084.085v8.042a.809.809,0,0,0,.809.809h.978v.978a.809.809,0,0,0,1.618,0v-.978h.978a.809.809,0,0,0,.809-.809V5.277a.085.085,0,0,1,.084-.085h16.084a.085.085,0,0,1,.085.085v8.044a.809.809,0,0,0,.809.809h.978v.976a.809.809,0,0,0,1.618,0V14.13h.978a.809.809,0,0,0,.809-.809V1.7a1.7,1.7,0,0,0-1.7-1.7Z"
                            transform="translate(-88.677 0)"
                          />
                          <path
                            id="Path_82"
                            data-name="Path 82"
                            d="M139.527,463.866a.809.809,0,0,0-.809.809v.978h-37.7v-.978a.809.809,0,0,0-1.618,0v3.574a.809.809,0,1,0,1.618,0v-.978h37.7v.978a.809.809,0,1,0,1.618,0v-3.574A.809.809,0,0,0,139.527,463.866Z"
                            transform="translate(-88.678 -413.826)"
                          />
                          <path
                            id="Path_83"
                            data-name="Path 83"
                            d="M.809,72.45a.809.809,0,1,0,0,1.618H4.383a.809.809,0,1,0,0-1.618H3.405v-37.7h.978a.809.809,0,1,0,0-1.618H.809a.809.809,0,1,0,0,1.618h.978v37.7Z"
                            transform="translate(0 -29.559)"
                          />
                          <path
                            id="Path_84"
                            data-name="Path 84"
                            d="M.809,432.352H2.6a.809.809,0,1,0,0-1.618H.809a.809.809,0,1,0,0,1.618Z"
                            transform="translate(0 -384.268)"
                          />
                          <path
                            id="Path_85"
                            data-name="Path 85"
                            d="M.809,1.618H2.6A.809.809,0,0,0,2.6,0H.809a.809.809,0,1,0,0,1.618Z"
                            transform="translate(0 0)"
                          />
                          <path
                            id="Path_86"
                            data-name="Path 86"
                            d="M67.076,480.434a.809.809,0,0,0-.809.809v1.787a.809.809,0,0,0,1.618,0v-1.787A.809.809,0,0,0,67.076,480.434Z"
                            transform="translate(-59.118 -428.607)"
                          />
                          <path
                            id="Path_87"
                            data-name="Path 87"
                            d="M497.809,480.434a.809.809,0,0,0-.809.809v1.787a.809.809,0,0,0,1.618,0v-1.787A.809.809,0,0,0,497.809,480.434Z"
                            transform="translate(-443.386 -428.607)"
                          />
                          <path
                            id="Path_88"
                            data-name="Path 88"
                            d="M4.956,464.1a.809.809,0,0,0-1.144,0L2.6,465.319,1.382,464.1a.809.809,0,0,0-1.144,1.144l1.215,1.215L.237,467.678a.809.809,0,0,0,1.144,1.144L2.6,467.607l1.215,1.215a.809.809,0,0,0,1.144-1.144l-1.215-1.215,1.215-1.215a.809.809,0,0,0,0-1.144Z"
                            transform="translate(0 -413.827)"
                          />
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Car Parking Floors"
                    subHeading="3 Basement"
                    svg={
                      <svg
                        id="parking"
                        xmlns="http://www.w3.org/2000/svg"
                        width="43.431"
                        height="43.431"
                        viewBox="0 0 43.431 43.431"
                        fill="currentColor"
                      >
                        <g
                          id="Group_57"
                          data-name="Group 57"
                          transform="translate(16.117 10.538)"
                        >
                          <g id="Group_56" data-name="Group 56">
                            <path
                              id="Path_120"
                              data-name="Path 120"
                              d="M197.766,124.23H190v22.355h2.545V139.5h5.22a7.512,7.512,0,0,0,7.5-7.5v-.261A7.512,7.512,0,0,0,197.766,124.23ZM202.725,132a4.965,4.965,0,0,1-4.959,4.959h-5.22V126.775h5.22a4.965,4.965,0,0,1,4.959,4.959Z"
                              transform="translate(-190.001 -124.23)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_59"
                          data-name="Group 59"
                          transform="translate(0)"
                        >
                          <g
                            id="Group_58"
                            data-name="Group 58"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_121"
                              data-name="Path 121"
                              d="M37.071,6.36A21.716,21.716,0,1,0,6.36,37.071,21.716,21.716,0,0,0,37.071,6.36Zm-1.8,28.911A19.171,19.171,0,0,1,8.16,8.16,19.171,19.171,0,0,1,35.271,35.271Z"
                              transform="translate(0)"
                            />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Plot Orientation"
                    subHeading="Corner"
                    svg={
                      <svg
                        id="orientation"
                        xmlns="http://www.w3.org/2000/svg"
                        width="41.712"
                        height="41.699"
                        viewBox="0 0 41.712 41.699"
                        fill="currentColor"
                      >
                        <g
                          id="Group_53"
                          data-name="Group 53"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_89"
                            data-name="Path 89"
                            d="M141.192,1.385A2.916,2.916,0,0,0,138.765.073,2.886,2.886,0,0,0,137.64.3L111.1,11.213a2.931,2.931,0,0,0,.17,5.485l10.28,3.509,3.518,10.28a2.932,2.932,0,0,0,5.485.17l10.91-26.539A2.869,2.869,0,0,0,141.192,1.385Zm-1.661,1.942L128.612,29.865a.812.812,0,0,1-.775.52.821.821,0,0,1-.8-.571l-3.679-10.765a1.02,1.02,0,0,0-.647-.647l-10.766-3.679a.848.848,0,0,1-.051-1.584l26.539-10.91a.926.926,0,0,1,.332-.068.843.843,0,0,1,.7.392A.779.779,0,0,1,139.531,3.326Z"
                            transform="translate(-99.978 -0.073)"
                          />
                          <path
                            id="Path_90"
                            data-name="Path 90"
                            d="M23.8,285.28l-14.6,14.6a1.045,1.045,0,0,0,1.482,1.473l14.59-14.6A1.042,1.042,0,1,0,23.8,285.28Z"
                            transform="translate(-8.142 -260.708)"
                          />
                          <path
                            id="Path_91"
                            data-name="Path 91"
                            d="M.307,266.96a1.043,1.043,0,0,0,.741,1.78,1.037,1.037,0,0,0,.741-.307l5.281-5.281A1.042,1.042,0,1,0,5.6,261.68Z"
                            transform="translate(0 -239.118)"
                          />
                          <path
                            id="Path_92"
                            data-name="Path 92"
                            d="M142.218,410.234a1.049,1.049,0,0,0,1.482,0l5.281-5.281a1.042,1.042,0,1,0-1.473-1.473l-5.281,5.281A1.031,1.031,0,0,0,142.218,410.234Z"
                            transform="translate(-129.826 -368.841)"
                          />
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Building Stories"
                    subHeading="17 Stories"
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="53.547"
                        height="53.547"
                        viewBox="0 0 53.547 53.547"
                        fill="currentColor"
                      >
                        <g id="building" transform="translate(0)">
                          <g
                            id="Group_55"
                            data-name="Group 55"
                            transform="translate(0)"
                          >
                            <g id="Group_54" data-name="Group 54">
                              <path
                                id="Path_93"
                                data-name="Path 93"
                                d="M145.348,477.867H120.359a.893.893,0,0,0-.892.892v1.785a.892.892,0,1,0,1.785,0v-.892h24.1a.892.892,0,0,0,0-1.785Z"
                                transform="translate(-106.973 -427.89)"
                              />
                              <path
                                id="Path_94"
                                data-name="Path 94"
                                d="M187.733,159.847a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355Zm1.785-4.462H191.3v3.57h-1.785Z"
                                transform="translate(-168.099 -137.536)"
                              />
                              <path
                                id="Path_95"
                                data-name="Path 95"
                                d="M11.6,102.4H.892a.893.893,0,0,0-.892.892v17.849a.892.892,0,0,0,1.785,0V104.185H11.6a.892.892,0,0,0,0-1.785Z"
                                transform="translate(0 -91.691)"
                              />
                              <path
                                id="Path_96"
                                data-name="Path 96"
                                d="M409.6,364.647a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                                transform="translate(-366.763 -320.917)"
                              />
                              <path
                                id="Path_97"
                                data-name="Path 97"
                                d="M4.462,307.2C.051,307.2,0,318.686,0,318.8a4.47,4.47,0,0,0,3.57,4.372v4.552a.892.892,0,1,0,1.785,0v-4.552a4.47,4.47,0,0,0,3.57-4.372C8.924,318.686,8.874,307.2,4.462,307.2Zm0,14.279A2.681,2.681,0,0,1,1.785,318.8c0-4.446,1.194-9.817,2.677-9.817S7.14,314.356,7.14,318.8A2.681,2.681,0,0,1,4.462,321.479Z"
                                transform="translate(0 -275.072)"
                              />
                              <path
                                id="Path_98"
                                data-name="Path 98"
                                d="M55.662,256h-3.57a.893.893,0,0,0-.892.892v1.785a.892.892,0,1,0,1.785,0v-.892H54.77v4.462a.892.892,0,1,0,1.785,0v-5.355A.893.893,0,0,0,55.662,256Z"
                                transform="translate(-45.845 -229.227)"
                              />
                              <path
                                id="Path_99"
                                data-name="Path 99"
                                d="M410.492,160.74h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,410.492,160.74Zm.893-5.355h1.785v3.57h-1.785Z"
                                transform="translate(-366.763 -137.537)"
                              />
                              <path
                                id="Path_100"
                                data-name="Path 100"
                                d="M55.662,153.6h-3.57a.893.893,0,0,0-.892.892v5.355a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355A.893.893,0,0,0,55.662,153.6Zm-.893,5.355H52.985v-3.57H54.77v3.57Z"
                                transform="translate(-45.845 -137.536)"
                              />
                              <path
                                id="Path_101"
                                data-name="Path 101"
                                d="M273.067,159.847a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                                transform="translate(-244.509 -137.536)"
                              />
                              <path
                                id="Path_102"
                                data-name="Path 102"
                                d="M404.136,102.4H393.426a.892.892,0,0,0,0,1.785h9.817v35.862a2.55,2.55,0,0,0-1.351-.124,3.564,3.564,0,0,0-6.222,0,2.624,2.624,0,0,0-.459-.04,2.677,2.677,0,1,0,0,5.355h7.139a2.681,2.681,0,0,0,2.677-2.677V103.292A.893.893,0,0,0,404.136,102.4Zm-1.785,41.052h-7.14a.892.892,0,1,1,0-1.785.882.882,0,0,1,.484.145.892.892,0,0,0,1.353-.549,1.778,1.778,0,0,1,3.466,0,.892.892,0,0,0,1.353.549.91.91,0,0,1,1.376.747A.894.894,0,0,1,402.351,143.452Z"
                                transform="translate(-351.481 -91.691)"
                              />
                              <path
                                id="Path_103"
                                data-name="Path 103"
                                d="M273.959,58.34h3.57a.893.893,0,0,0,.892-.892V52.093a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,273.959,58.34Zm.892-5.355h1.785v3.57h-1.785Z"
                                transform="translate(-244.509 -45.846)"
                              />
                              <path
                                id="Path_104"
                                data-name="Path 104"
                                d="M273.067,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                                transform="translate(-244.509 -229.227)"
                              />
                              <path
                                id="Path_105"
                                data-name="Path 105"
                                d="M188.626,58.34h3.57a.893.893,0,0,0,.892-.892V52.093a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892v5.355A.893.893,0,0,0,188.626,58.34Zm.892-5.355H191.3v3.57h-1.785Z"
                                transform="translate(-168.1 -45.846)"
                              />
                              <path
                                id="Path_106"
                                data-name="Path 106"
                                d="M247.725,409.954a.893.893,0,1,0,1.267,0A.938.938,0,0,0,247.725,409.954Z"
                                transform="translate(-221.585 -366.858)"
                              />
                              <path
                                id="Path_107"
                                data-name="Path 107"
                                d="M187.733,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355A.893.893,0,0,0,192.2,256h-3.57a.893.893,0,0,0-.892.892v5.355Zm1.785-4.462H191.3v3.57h-1.785Z"
                                transform="translate(-168.099 -229.227)"
                              />
                              <path
                                id="Path_108"
                                data-name="Path 108"
                                d="M170.667,359.292a.893.893,0,0,0,.892.892h2.677v8.032a.892.892,0,0,0,1.785,0v-8.032h7.14v8.032a.892.892,0,0,0,1.785,0v-8.032h2.677a.892.892,0,0,0,0-1.785H171.559A.893.893,0,0,0,170.667,359.292Z"
                                transform="translate(-152.818 -320.917)"
                              />
                              <path
                                id="Path_109"
                                data-name="Path 109"
                                d="M409.6,262.247a.893.893,0,0,0,.892.892h3.57a.893.893,0,0,0,.892-.892v-5.355a.893.893,0,0,0-.892-.892h-3.57a.893.893,0,0,0-.892.892Zm1.785-4.462h1.785v3.57h-1.785Z"
                                transform="translate(-366.763 -229.227)"
                              />
                              <path
                                id="Path_110"
                                data-name="Path 110"
                                d="M160.63,0h-23.2a.893.893,0,0,0-.892.892V47.3a.892.892,0,0,0,1.785,0V1.785h21.419V47.3a.892.892,0,1,0,1.785,0V.892A.893.893,0,0,0,160.63,0Z"
                                transform="translate(-122.255)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Parking Space"
                    subHeading="700 to 800 Cars"
                    svg={
                      <svg
                        id="parking"
                        xmlns="http://www.w3.org/2000/svg"
                        width="43.431"
                        height="43.431"
                        viewBox="0 0 43.431 43.431"
                        fill="currentColor"
                      >
                        <g
                          id="Group_57"
                          data-name="Group 57"
                          transform="translate(16.117 10.538)"
                        >
                          <g id="Group_56" data-name="Group 56">
                            <path
                              id="Path_120"
                              data-name="Path 120"
                              d="M197.766,124.23H190v22.355h2.545V139.5h5.22a7.512,7.512,0,0,0,7.5-7.5v-.261A7.512,7.512,0,0,0,197.766,124.23ZM202.725,132a4.965,4.965,0,0,1-4.959,4.959h-5.22V126.775h5.22a4.965,4.965,0,0,1,4.959,4.959Z"
                              transform="translate(-190.001 -124.23)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_59"
                          data-name="Group 59"
                          transform="translate(0)"
                        >
                          <g
                            id="Group_58"
                            data-name="Group 58"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_121"
                              data-name="Path 121"
                              d="M37.071,6.36A21.716,21.716,0,1,0,6.36,37.071,21.716,21.716,0,0,0,37.071,6.36Zm-1.8,28.911A19.171,19.171,0,0,1,8.16,8.16,19.171,19.171,0,0,1,35.271,35.271Z"
                              transform="translate(0)"
                            />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Plot Dimension"
                    subHeading="?"
                    svg={
                      <svg
                        id="ruler"
                        xmlns="http://www.w3.org/2000/svg"
                        width="45.911"
                        height="45.911"
                        viewBox="0 0 45.911 45.911"
                        fill="currentColor"
                      >
                        <g
                          id="Group_50"
                          data-name="Group 50"
                          transform="translate(0 0)"
                        >
                          <g id="Group_49" data-name="Group 49">
                            <path
                              id="Path_78"
                              data-name="Path 78"
                              d="M45.623,12.039,33.871.288a.979.979,0,0,0-1.387,0l-32.2,32.2a.979.979,0,0,0,0,1.387L12.04,45.623a.979.979,0,0,0,1.387,0l32.2-32.2A.979.979,0,0,0,45.623,12.039Zm-32.9,31.5L2.372,33.183,10.151,25.4l3.53,3.53a.981.981,0,0,0,1.406-1.367l-.02-.02-3.53-3.521L14.1,21.461l5.507,5.507A.984.984,0,0,0,21,25.571l-5.507-5.507L18.058,17.5l3.53,3.521a.98.98,0,1,0,1.387-1.387l-3.53-3.521,2.567-2.567,5.507,5.507a.98.98,0,0,0,1.387-1.387L23.4,12.158l2.567-2.567,3.53,3.53a.981.981,0,1,0,1.4-1.377l-.01-.01-3.5-3.56,2.567-2.567,5.507,5.507a.98.98,0,1,0,1.387-1.387L31.334,4.221l1.849-1.849L43.539,12.728Z"
                              transform="translate(0 0)"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_52"
                          data-name="Group 52"
                          transform="translate(8.118 31.661)"
                        >
                          <g id="Group_51" data-name="Group 51">
                            <path
                              id="Path_79"
                              data-name="Path 79"
                              d="M87.937,322.872a3.157,3.157,0,1,0,0,4.465A3.164,3.164,0,0,0,87.937,322.872Zm-1.288,3.049a.112.112,0,0,1-.108.039,1.2,1.2,0,1,1,0-1.691A1.161,1.161,0,0,1,86.648,325.921Z"
                              transform="translate(-82.55 -321.95)"
                            />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Building Height"
                    subHeading="220 Feet"
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="55.794"
                        height="55.788"
                        viewBox="0 0 55.794 55.788"
                        fill="currentColor"
                      >
                        <g id="house" transform="translate(0)">
                          <path
                            id="Path_111"
                            data-name="Path 111"
                            d="M39.84,47.888H32.826a.753.753,0,0,1,0-1.507h6.26V28.437h-28.1V46.381h9.078a.753.753,0,1,1,0,1.507H10.233a.753.753,0,0,1-.753-.753V27.683a.753.753,0,0,1,.753-.753H39.84a.753.753,0,0,1,.753.753V47.135A.753.753,0,0,1,39.84,47.888Z"
                            transform="translate(-3.183 -8.149)"
                          />
                          <path
                            id="Path_112"
                            data-name="Path 112"
                            d="M32.5,54.257H30.283a.753.753,0,0,1,0-1.507H32.5a.753.753,0,0,1,0,1.507Z"
                            transform="translate(-8.129 -14.518)"
                          />
                          <path
                            id="Path_113"
                            data-name="Path 113"
                            d="M43.111,22.288H3.777a.753.753,0,0,1-.52-1.3L22.923,2.209a.753.753,0,0,1,1.04,0L43.63,20.99a.753.753,0,0,1-.52,1.3ZM5.656,20.781H41.231L23.443,3.8Z"
                            transform="translate(-1.591 -2)"
                          />
                          <path
                            id="Path_114"
                            data-name="Path 114"
                            d="M65.909,54.812a.93.93,0,0,1-.93-.93V12.97a.93.93,0,1,1,1.861,0V53.881A.93.93,0,0,1,65.909,54.812Z"
                            transform="translate(-14.772 -12.037)"
                          />
                          <path
                            id="Path_115"
                            data-name="Path 115"
                            d="M69.351,17.62a.93.93,0,0,1-.658-.272l-3.062-3.061L62.57,17.347a.93.93,0,1,1-1.316-1.316l3.722-3.722a.93.93,0,0,1,1.317,0l3.722,3.722a.93.93,0,0,1-.658,1.588Z"
                            transform="translate(-14.493 -12.037)"
                          />
                          <path
                            id="Path_116"
                            data-name="Path 116"
                            d="M65.631,57.593a.93.93,0,0,1-.658-.272L61.252,53.6a.93.93,0,1,1,1.316-1.316l3.061,3.062,3.062-3.062A.93.93,0,1,1,70.006,53.6L66.284,57.32A.93.93,0,0,1,65.631,57.593Z"
                            transform="translate(-14.493 -14.818)"
                          />
                          <path
                            id="Path_117"
                            data-name="Path 117"
                            d="M48.791,67.861H6.95A.93.93,0,0,1,6.95,66h41.84a.93.93,0,0,1,0,1.861Z"
                            transform="translate(-6.017 -15.794)"
                          />
                          <path
                            id="Path_118"
                            data-name="Path 118"
                            d="M47.922,71.307a.93.93,0,0,1-.658-1.588l3.061-3.064-3.061-3.062a.93.93,0,0,1,1.317-1.311L52.3,66a.93.93,0,0,1,0,1.316l-3.722,3.722a.93.93,0,0,1-.659.266Z"
                            transform="translate(-8.868 -15.519)"
                          />
                          <path
                            id="Path_119"
                            data-name="Path 119"
                            d="M10.669,71.3a.93.93,0,0,1-.658-.272L6.29,67.31a.93.93,0,0,1,0-1.316l3.722-3.722a.93.93,0,1,1,1.316,1.316L8.266,66.652l3.061,3.061a.93.93,0,0,1-.658,1.591Z"
                            transform="translate(-6.017 -15.516)"
                          />
                        </g>
                      </svg>
                    }
                  />
                  <BuildingDetailsCard
                    Heading="Purpose of Building"
                    subHeading="5 Star Hotel"
                    svg={
                      <svg
                        id="target-outline-symbol-in-a-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.205"
                        height="48.73"
                        viewBox="0 0 48.205 48.73"
                        fill="currentColor"
                      >
                        <g
                          id="Group_60"
                          data-name="Group 60"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_122"
                            data-name="Path 122"
                            d="M35.253,14.688l6.137,1.739a1.078,1.078,0,0,0,.286.04,1.051,1.051,0,0,0,.743-.308l5.726-5.725a1.052,1.052,0,0,0-.454-1.755L41.525,6.93,39.774.763A1.051,1.051,0,0,0,38.02.308L32.3,6.034a1.048,1.048,0,0,0-.269,1.029L33.767,13.2,32.39,14.577A19.592,19.592,0,1,0,33.9,16.038Zm6.118-.452-4.413-1.25,4.023-4.025,4.413,1.252ZM34.219,7.083,38.24,3.06l1.253,4.414L37.1,9.866,35.47,11.5Zm2.826,22.2A17.39,17.39,0,1,1,30.9,16.063L25.761,21.2a10.155,10.155,0,1,0,1.54,1.432l5.113-5.112A17.242,17.242,0,0,1,37.045,29.28Zm-15.343,0a2,2,0,1,1-2-2A2,2,0,0,1,21.7,29.28Zm-.293-3.722a4.067,4.067,0,0,0-1.709-.384A4.127,4.127,0,1,0,23.036,26.9l2.782-2.782A8.021,8.021,0,1,1,24.262,22.7Z"
                            transform="translate(-0.249 0)"
                          />
                        </g>
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src={ring}
            alt="ring"
            className="banner__container__content__ring__logo"
          />
        </div>
        <div className="home__features__container">
          <div className="home__features__container__left">
            <div className="home__features__container__left__heading heading">
              Heading Here
            </div>
            <div className="home__features__container__left__info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries,
            </div>
            <div className="home__features__container__left__buttons">
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.184"
                  height="44.218"
                  fill="currentColor"
                  viewBox="0 0 49.184 44.218"
                >
                  <g id="Group_7" data-name="Group 7" transform="translate(0)">
                    <path
                      id="Path_26"
                      data-name="Path 26"
                      d="M3709.8,1113.814c-.2.014-.374.035-.551.038-1.427.026-1.427.025-1.427,1.491v22.139h-4.873v-23.568H3667.8v23.559h-4.98v-23.6h-2.034c0-1.233-.008-2.4,0-3.572.006-.662-.178-1.474.135-1.942.291-.433,1.13-.5,1.729-.726a70.2,70.2,0,0,0,15.8-8.168,35.515,35.515,0,0,0,6.44-5.691c.134-.155.245-.331.372-.506,6.61,7.3,15.016,11.451,23.917,14.788.535.2.766.413.746,1.009-.049,1.512-.026,3.026-.036,4.54C3709.887,1113.647,3709.851,1113.693,3709.8,1113.814Zm-.915-.935c0-1.224.019-2.371-.021-3.516-.007-.176-.258-.416-.451-.5-.87-.374-1.765-.689-2.642-1.048a62.656,62.656,0,0,1-17.35-10.067c-1.065-.912-2.059-1.908-3.091-2.87a1.317,1.317,0,0,0-.2.139,47,47,0,0,1-13.424,9.65c-3.046,1.513-6.226,2.757-9.336,4.14-.239.107-.576.357-.585.554-.056,1.145-.028,2.293-.028,3.512h2.061v1.056q0,10.74,0,21.479a2.214,2.214,0,0,0,.022.687c.059.169.257.4.4.409.812.04,1.627.019,2.542.019v-23.6h37.149v23.542h2.916v-23.591Z"
                      transform="translate(-3660.74 -1093.265)"
                    />
                    <path
                      id="Path_27"
                      data-name="Path 27"
                      d="M3713.237,1202.081v19.391h-3.8v-19.391Zm-2.791.963v17.419h1.752v-17.419Z"
                      transform="translate(-3699.264 -1179.347)"
                    />
                    <path
                      id="Path_28"
                      data-name="Path 28"
                      d="M3833.076,1221.532h-3.783V1202.12h3.783Zm-.953-18.485h-.891c-1.008,0-1.009,0-1.009.98q0,7.8,0,15.605v.868h1.9Z"
                      transform="translate(-3794.08 -1179.378)"
                    />
                  </g>
                </svg>
                <span>BANQUET</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77.082"
                  height="48.723"
                  viewBox="0 0 77.082 48.723"
                  fill="currentColor"
                >
                  <g
                    id="Group_13"
                    data-name="Group 13"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M1297.7,1244.372c-.3-1.758-.584-3.466-.888-5.269a9.266,9.266,0,0,1,5.878.857,43.229,43.229,0,0,1,4.05,2.783c.5.352.976.741,1.489,1.074a3.48,3.48,0,0,0,4.011.109,42.4,42.4,0,0,0,3.51-2.569,11.764,11.764,0,0,1,14.374.1c.972.8,1.961,1.582,3,2.3a3.643,3.643,0,0,0,4.357.065c1.152-.767,2.23-1.647,3.327-2.5a11.68,11.68,0,0,1,14.362.185c.85.692,1.7,1.384,2.582,2.041a3.7,3.7,0,0,0,3.916.574c3.8-1.685,7.581-3.4,11.369-5.1.254-.114.5-.247.862-.426-.11,1.85-.2,3.581-.337,5.307a.967.967,0,0,1-.492.611c-2.739,1.443-5.44,2.971-8.251,4.259a10.113,10.113,0,0,1-11.6-1.747c-.61-.529-1.216-1.063-1.836-1.579a4.689,4.689,0,0,0-5.348-.658,33.327,33.327,0,0,0-4.575,2.875c-2.749,1.953-5.673,2.871-9.019,1.87a13.026,13.026,0,0,1-4.565-2.849c-.272-.229-.533-.47-.811-.691-2.8-2.22-4.973-2.3-7.921-.255-.769.533-1.5,1.121-2.225,1.715-2.864,2.351-6.08,2.585-9.5,1.59a15.826,15.826,0,0,1-5.509-3.151A5.5,5.5,0,0,0,1297.7,1244.372Zm1.035-1.417a19.275,19.275,0,0,1,2.306.872c.736.388,1.379.949,2.08,1.407a24.4,24.4,0,0,0,3.268,2.049c3.518,1.567,6.937,1.629,10.036-1.067a18.715,18.715,0,0,1,1.53-1.186c1.854-1.3,3.787-2.347,6.187-1.932,1.987.343,3.358,1.688,4.86,2.854a15.147,15.147,0,0,0,3.3,2.157c3.078,1.282,5.844.36,8.446-1.488a33.992,33.992,0,0,1,4.742-2.965,5.932,5.932,0,0,1,6.78.889c.844.7,1.632,1.478,2.511,2.131a8.749,8.749,0,0,0,9.485.97c2.563-1.2,5.037-2.6,7.543-3.919.206-.109.487-.3.514-.483.116-.782.148-1.577.225-2.535-.527.258-.89.453-1.266.617-3.071,1.334-6.132,2.692-9.221,3.98a4.988,4.988,0,0,1-5.114-.786c-.884-.65-1.726-1.355-2.585-2.039a10.41,10.41,0,0,0-12.913-.095,41.011,41.011,0,0,1-3.491,2.588,4.776,4.776,0,0,1-5.316-.058,30.311,30.311,0,0,1-2.872-2.135,10.4,10.4,0,0,0-13.668-.088c-.582.461-1.151.94-1.744,1.387a6.307,6.307,0,0,1-4.531,1.609,8.112,8.112,0,0,1-4.138-2.158,26.075,26.075,0,0,0-2.956-2.172,7.836,7.836,0,0,0-4.451-1.1Z"
                      transform="translate(-1296.814 -1201.213)"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M1405.48,1094.141l12.315-10.286c-.791-.961-1.554-1.9-2.329-2.826-2.174-2.6-4.339-5.211-6.534-7.794-2.577-3.032-1.561-6.626,2.253-7.655q11.6-3.131,23.227-6.156a4.246,4.246,0,0,1,4.8,2.055,4.145,4.145,0,0,1-.679,5.159,6.982,6.982,0,0,1-2.7,1.384c-5.175,1.432-10.374,2.775-15.564,4.152a5.92,5.92,0,0,0-.581.225l18.111,22.1c-.768-.142-1.279-.214-1.779-.333a11.36,11.36,0,0,0-9.91,1.9c-1,.746-2.138,1.308-3.213,1.954a3.256,3.256,0,0,1-3.323.014,11.008,11.008,0,0,1-2.755-1.754c-2.774-2.736-6.012-3.291-9.648-2.361q-.651.166-1.307.314C1405.8,1094.243,1405.737,1094.2,1405.48,1094.141Zm4.2-1.863a10.4,10.4,0,0,1,8.159,3.237,10.5,10.5,0,0,0,2.57,1.495,1.63,1.63,0,0,0,1.715-.051c1.037-.643,2.171-1.141,3.158-1.848a12.388,12.388,0,0,1,5.431-2.408c1.212-.176,2.45-.17,3.792-.253l-17.078-20.777c.24-.086.351-.135.467-.167q9.092-2.425,18.187-4.84a3.108,3.108,0,0,0,2.28-2.03,2.885,2.885,0,0,0-.627-3.065,3.175,3.175,0,0,0-3.454-.857q-11.557,3.1-23.119,6.183a3.066,3.066,0,0,0-1.641,5.048c2.008,2.446,4.057,4.857,6.085,7.287,1.317,1.578,2.627,3.162,3.969,4.778Z"
                      transform="translate(-1382.828 -1059.283)"
                    />
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M1533.47,1128.1a8.316,8.316,0,1,1-8.372,8.315A8.287,8.287,0,0,1,1533.47,1128.1Zm6.969,8.308a7,7,0,0,0-7.018-7.091,7.109,7.109,0,0,0-7.1,7.069,7.031,7.031,0,0,0,7.078,7.051A6.9,6.9,0,0,0,1540.439,1136.408Z"
                      transform="translate(-1477.511 -1113.755)"
                    />
                  </g>
                </svg>
                <span>INFINITY POOL</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54.671"
                  height="54.541"
                  viewBox="0 0 54.671 54.541"
                  fill="currentColor"
                >
                  <g id="Group_9" data-name="Group 9" transform="translate(0)">
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M2943.356,1129a22.006,22.006,0,0,0,.535,2.531,4.3,4.3,0,0,1-1.279,4.927c-2.16,2.052-4.218,4.211-6.34,6.3-2.4,2.364-4.828,2.363-7.2.015-1.53-1.514-2.986-3.108-4.59-4.536a3.917,3.917,0,0,0-2.287-.959c-3.474-.1-6.955-.127-10.428-.006-1.466.051-1.964-.553-2.072-1.836q-.516-6.094-1.048-12.187c-.433-4.884-.871-9.767-1.343-14.647a1.615,1.615,0,0,0-.57-1.036c-3.518-2.569-3.328-5.842.5-8.054-.2-4.687,1.71-6.272,5.972-5.9.743-2.177,2.069-3.906,4.607-3.576,1.249.163,2.341,1.345,3.6,1.636,1.212.279,2.556-.077,3.832.009.489.033.948.517,1.412.79,2.812-2.23,4.59-2.165,7.013.134a16.833,16.833,0,0,1,3.3-.967,3.888,3.888,0,0,1,4.221,3.367,2.964,2.964,0,0,0,1.394,2.214,4.217,4.217,0,0,1,1.373,4.9,16.611,16.611,0,0,0-.406,2.531,5.309,5.309,0,0,1-.351,1.916c-1.634,2.6-.862,5.522-1.1,8.419,2.088-2.091,4.226-4.136,6.247-6.291,1.05-1.119,1.783-1.089,2.819.022,1.956,2.1,4.053,4.063,6.063,6.111,2.213,2.256,2.215,4.713-.006,6.982-2.046,2.09-4.2,4.08-6.18,6.229a4.539,4.539,0,0,1-5.327,1.477A19.647,19.647,0,0,0,2943.356,1129Zm-25.068,6.628c1.875.059,3.264.17,4.753-1.439,4.832-5.222,9.963-10.169,15.047-15.153a5.733,5.733,0,0,0,2.174-4.348c-.012-2.107.333-4.216.525-6.353h-6.937c-.1,1.556-.206,3.032-.3,4.509-.09,1.43-.08,2.874-.28,4.288-.187,1.323.406,2.824-.513,4l-.56-.066c.213-4.231.427-8.462.641-12.72h-7.718v20.688h-.641v-20.67h-7.643C2917.324,1117.506,2917.8,1126.52,2918.288,1135.627Zm-9.5-35.539a16.923,16.923,0,0,0-1.684.593,3.231,3.231,0,0,0-1.782,3.715c.334,1.319,1.065,2.369,2.546,2.4,3.089.054,6.18-.01,9.271-.01a2.36,2.36,0,0,0,2.376-1.925,3.006,3.006,0,0,0-2.086-3.783,3.077,3.077,0,0,0-3.742,2.167,7.372,7.372,0,0,1-.562,1.087l-.416-.233a3.932,3.932,0,0,1,6.517-3.069c1.793,1.6,1.686,3.551.546,5.654.6.041,1.022.095,1.444.1q9.687.008,19.373,0c1.776,0,2.446-.926,1.955-2.646-.584-2.048-2.175-2.587-4.051-2.6.048-3.745-2.757-6-6.618-3.1-.7-2.483-2.5-3.211-4.772-2.742-.948-3.009-2.783-4.206-4.915-3.127-1.078.546-1.439.262-2.112-.527a3.284,3.284,0,0,0-5.563.913,5.722,5.722,0,0,0-.247,1.49c-1.777.294-3.569.168-4.869.907C2907.646,1096.348,2908.054,1098.265,2908.792,1100.089Zm15.282,35.4c2.136,2.164,4.232,4.357,6.408,6.467,1.542,1.495,2.905,1.437,4.464-.083,1.7-1.656,3.238-3.5,5.068-4.987,2.263-1.842,3.309-3.847,2-6.666a1.173,1.173,0,0,1-.093-.317,1.88,1.88,0,0,1,2.318-2.309,23.508,23.508,0,0,0,2.728.626,3.059,3.059,0,0,0,2.083-.517c2.567-2.42,5.054-4.929,7.5-7.469a2.477,2.477,0,0,0,.183-3.6c-2.25-2.392-4.667-4.626-6.944-6.856Zm-15.171-27.131c.811,9.166,1.612,18.217,2.409,27.22h6.019c-.491-9.15-.974-18.185-1.458-27.22Zm24.8-13.856c-.347-.527-.586-.936-.868-1.311a3.307,3.307,0,0,0-4.937-.465,1.537,1.537,0,0,0-.38,1.1,1.223,1.223,0,0,0,.683.756c1.484.658,2.993,1.255,4.849,2.019,2.556-1.374,5.219-.211,6.191,3.182a1.455,1.455,0,0,0,.612.826c.99.525,2.026.966,3.044,1.442.89-2.422.252-3.716-2.531-5.017.233-1.793-.136-3.452-1.978-4.239C2936.491,1091.986,2935.009,1092.932,2933.7,1094.5Z"
                      transform="translate(-2904.221 -1089.995)"
                    />
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M3010.951,1244.473a9.14,9.14,0,0,1-1.019,1.662q-2.624,2.735-5.351,5.373c-1.154,1.122-2.116,1.1-3.288-.014-.678-.642-1.334-1.309-1.981-1.983-1.227-1.281-1.255-2.084,0-3.385q2.576-2.669,5.246-5.245c1.3-1.252,2.118-1.223,3.393,0,.715.683,1.433,1.369,2.088,2.108A10.358,10.358,0,0,1,3010.951,1244.473Zm-1.049.005.517-.647a13.689,13.689,0,0,1-2.571-1.789c-1.095-1.2-1.921-1.389-3.036-.044-.944,1.139-2.094,2.1-3.127,3.17-3.04,3.142-3.232,2.1.142,5.546.039.039.08.076.118.115a1.2,1.2,0,0,0,1.976-.057c1.771-1.806,3.573-3.583,5.347-5.386A6.476,6.476,0,0,0,3009.9,1244.478Z"
                      transform="translate(-2974.692 -1202.224)"
                    />
                    <path
                      id="Path_25"
                      data-name="Path 25"
                      d="M3067.3,1188.4a9.413,9.413,0,0,1-1,1.6q-2.647,2.735-5.382,5.384a2.138,2.138,0,0,1-3.331-.016c-3.7-3.355-3.708-3.6-.242-7.067,1.21-1.209,2.394-2.447,3.639-3.618,1.192-1.122,2.111-1.09,3.3.04.72.683,1.446,1.368,2.094,2.117A10.021,10.021,0,0,1,3067.3,1188.4Zm-8.05,7.039c.457-.373.814-.62,1.119-.92,1.179-1.158,2.354-2.319,3.506-3.5,3-3.08,3.18-2.13-.175-5.577-.732-.751-1.311-.821-2.059-.026-1.207,1.283-2.493,2.491-3.727,3.748-2.909,2.96-2.933,2.125.086,5.194C3058.366,1194.73,3058.794,1195.05,3059.245,1195.438Z"
                      transform="translate(-3016.892 -1160.243)"
                    />
                  </g>
                </svg>
                <span>ENTERTAINMENT</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  id="Group_10"
                  data-name="Group 10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.341"
                  height="49.357"
                  viewBox="0 0 49.341 49.357"
                  fill="currentColor"
                >
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M2569.931,1102.333a24.67,24.67,0,1,1-24.511-24.7A24.686,24.686,0,0,1,2569.931,1102.333Zm-24.694,23.594a23.631,23.631,0,1,0-23.611-23.557A23.642,23.642,0,0,0,2545.237,1125.927Z"
                    transform="translate(-2520.59 -1077.628)"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M2663.816,1134.677c.081-3.3.168-6.609.228-9.915,0-.231-.145-.611-.317-.677a4.421,4.421,0,0,1-2.765-3.811,10.078,10.078,0,0,1,.84-6.435,7.49,7.49,0,0,1,1.005-1.5,3.117,3.117,0,0,1,5.128.04,7.643,7.643,0,0,1,1.1,1.71,10.248,10.248,0,0,1,.507,7.068,4.048,4.048,0,0,1-2.458,2.883.874.874,0,0,0-.43.667c.159,6.479.346,12.957.529,19.435a5.883,5.883,0,0,1,0,.63,1.82,1.82,0,0,1-1.919,1.771,1.745,1.745,0,0,1-1.712-1.877c.052-2.885.148-5.77.229-8.654.012-.446.038-.892.057-1.337Zm2.051-.4h.01c-.1-3.358-.182-6.715-.3-10.073a.87.87,0,0,1,.788-1.036,2.7,2.7,0,0,0,2.052-1.881,8.77,8.77,0,0,0-.673-7.436c-1.463-2.473-3.408-2.43-4.837.078a8.977,8.977,0,0,0-.67,7.229,2.7,2.7,0,0,0,2.045,1.992c.74.165.883.56.862,1.228-.206,6.662-.391,13.326-.589,19.988-.016.58.075,1.078.764,1.151.557.059.826-.36.8-1.166Q2666,1139.319,2665.867,1134.282Z"
                    transform="translate(-2629.194 -1103.495)"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M2571.552,1112.972v2.956c0,2.153.031,4.307-.014,6.459a2.1,2.1,0,0,0,1.425,2.2c.6.23.689.581.674,1.138q-.25,8.737-.464,17.475c-.026,1-.025,2-.047,2.993a.729.729,0,0,0,.734.842.737.737,0,0,0,.816-.843c-.033-1.338-.077-2.677-.11-4.015q-.2-8.3-.412-16.61a.834.834,0,0,1,.607-.942,2.217,2.217,0,0,0,1.507-2.32c-.043-2.809-.014-5.619-.014-8.428V1113c.735-.024,1.032.351,1.033.954.007,2.967.013,5.933-.022,8.9a2.761,2.761,0,0,1-1.534,2.415,1,1,0,0,0-.56,1.056q.269,9.839.506,19.68a1.773,1.773,0,0,1-1.671,2.057,1.746,1.746,0,0,1-1.892-1.841c.009-1.575.046-3.15.088-4.724q.2-7.6.427-15.192a.925.925,0,0,0-.514-1,2.983,2.983,0,0,1-1.622-2.7c-.022-2.835-.013-5.671-.007-8.507A.977.977,0,0,1,2571.552,1112.972Z"
                    transform="translate(-2559.237 -1105.008)"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M2627.536,1132.8c0,.309-.007.619,0,.928.105,4.041.222,8.081.312,12.122a1.864,1.864,0,0,1-1.618,1.92,1.9,1.9,0,0,1-2.1-1.289,2.836,2.836,0,0,1-.1-.851q-.007-15.752,0-31.505c0-.57-.089-1.3.59-1.481.726-.2.994.535,1.163,1.043a67.352,67.352,0,0,1,2.095,6.806c.673,3.086,1.09,6.229,1.556,9.357a2.9,2.9,0,0,1-.237,1.753,6.588,6.588,0,0,1-1.448,1.358Zm-2.309-18.019-.2.043v.747q0,14.812,0,29.624c0,1.117.3,1.609.963,1.574.638-.034.89-.485.861-1.577q-.167-6.259-.343-12.519c-.014-.488-.074-.954.647-1,1.054-.072,1.289-.356,1.292-1.432a7.09,7.09,0,0,0-.054-1.257c-.554-3.065-1.07-6.14-1.719-9.185C2626.312,1118.1,2625.717,1116.453,2625.227,1114.783Z"
                    transform="translate(-2600.72 -1104.73)"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M2559.536,1154.362a21.988,21.988,0,0,1-.4,2.908,15.353,15.353,0,0,0,1.447,12.151,3.329,3.329,0,0,1,.4,2.179c-3.67-2.494-4.638-12.584-1.684-17.27Z"
                    transform="translate(-2549.225 -1137.047)"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M2692.272,1178.969a16.19,16.19,0,0,1,.46-2.629,15.966,15.966,0,0,0,.609-8.518c-.157-.779-.142-.849.672-1.558a16.445,16.445,0,0,1-1.407,12.744Z"
                    transform="translate(-2653.588 -1146.292)"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M2588.01,1117.823c0,1.365.023,2.731-.02,4.095-.008.264-.238.708-.427.744-.489.092-.559-.324-.558-.727,0-2.809-.011-5.618.025-8.427,0-.241.335-.479.514-.718.155.234.438.464.444.7C2588.031,1114.935,2588.01,1116.379,2588.01,1117.823Z"
                    transform="translate(-2572.04 -1104.867)"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M2578.5,1117.811c0-1.392-.026-2.784.022-4.174.01-.285.3-.56.464-.839.171.273.487.544.491.818q.055,4.135,0,8.27c0,.275-.278.742-.488.78-.548.1-.484-.4-.486-.759C2578.5,1120.542,2578.5,1119.176,2578.5,1117.811Z"
                    transform="translate(-2565.448 -1104.873)"
                  />
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M2649.493,1244.647c.219.632-.071,1.044-.734,1.391a17.088,17.088,0,0,1-4.875,1.761c-.2-.647-.059-.974.635-1.214C2646.186,1246.007,2647.812,1245.311,2649.493,1244.647Z"
                    transform="translate(-2616.038 -1207.013)"
                  />
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M2601.74,1250.531c-1.746-.61-3.315-1.148-4.877-1.708-.638-.229-.393-.743-.373-1.143l5.249,1.769Z"
                    transform="translate(-2579.34 -1209.363)"
                  />
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M2642.8,1116.522l-.445.9c-1.528-1.089-3.691-.682-4.969-2.309C2638.325,1114.864,2641.244,1115.615,2642.8,1116.522Z"
                    transform="translate(-2611.069 -1106.628)"
                  />
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M2606.215,1116.513c-.262-.7-.087-1.083.626-1.221.764-.148,1.518-.349,2.34-.541v1.021Z"
                    transform="translate(-2586.833 -1106.386)"
                  />
                </svg>
                <span>DINE-IN</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.83"
                  height="39.958"
                  viewBox="0 0 42.83 39.958"
                  fill="currentColor"
                >
                  <g id="Group_8" data-name="Group 8" transform="translate(0)">
                    <path
                      id="Path_29"
                      data-name="Path 29"
                      d="M3336.932,1120.627h-7.124v-1.063c.223-.01.42-.027.618-.027q15.33,0,30.66,0a2.694,2.694,0,0,1,2.9,2.58,10.466,10.466,0,0,1-.349,2.122q-1.136,5.441-2.3,10.878a2.677,2.677,0,0,1-2.383,2.167q-5.621.746-11.242,1.486-6.459.84-12.919,1.662c-.176.023-.35.061-.614.108-.046-.348-.089-.669-.143-1.072.822-.108,1.614-.229,2.41-.307.391-.039.536-.183.536-.59q-.017-8.765-.01-17.53C3336.976,1120.933,3336.953,1120.824,3336.932,1120.627Zm18.4,15.935-1.075.068v-15.941h-7.5v17.1c2.221-.292,4.4-.57,6.582-.871.664-.092,1.319-.246,1.98-.37,1.133-.114,2.27-.2,3.4-.348a1.64,1.64,0,0,0,1.645-1.573q1.237-5.936,2.486-11.871a1.607,1.607,0,0,0-1.717-2.115c-1.467,0-2.933,0-4.4,0h-1.353v.841q0,7.172,0,14.345C3355.376,1136.071,3355.346,1136.317,3355.33,1136.562Zm-17.219-15.9v18.267l7.452-.99V1120.66Z"
                      transform="translate(-3321.159 -1115.283)"
                    />
                    <path
                      id="Path_30"
                      data-name="Path 30"
                      d="M3324.133,1126.963v1.06h-.8c-7.557,0-15.114-.065-22.669.031a5.333,5.333,0,0,1-5.677-4.762c-1.146-6.068-2.47-12.1-3.717-18.151q-.51-2.474-1-4.953a1.671,1.671,0,0,0-1.857-1.56c-1.058,0-2.116,0-3.225,0v-.982a36.421,36.421,0,0,1,4.134.038,2.3,2.3,0,0,1,1.931,2.02q1.3,6.2,2.569,12.41,1.221,5.906,2.44,11.812a3.625,3.625,0,0,0,3.579,3.008c7.759.029,15.518.023,23.276.03Z"
                      transform="translate(-3285.19 -1097.603)"
                    />
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M3340.5,1270.485a3.558,3.558,0,1,1,3.574,3.548A3.564,3.564,0,0,1,3340.5,1270.485Zm6.011-.011a2.391,2.391,0,0,0-2.455-2.475,2.477,2.477,0,0,0-2.507,2.462,2.546,2.546,0,0,0,2.5,2.5A2.445,2.445,0,0,0,3346.516,1270.474Z"
                      transform="translate(-3329.782 -1234.078)"
                    />
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      d="M3454.727,1270.543a3.555,3.555,0,1,1-7.106-.216,3.555,3.555,0,0,1,7.106.216Zm-6.012-.079a2.462,2.462,0,0,0,2.46,2.5,2.544,2.544,0,0,0,2.508-2.49,2.477,2.477,0,0,0-2.5-2.473A2.4,2.4,0,0,0,3448.714,1270.464Z"
                      transform="translate(-3416.132 -1234.078)"
                    />
                  </g>
                </svg>
                <span>RETAIL AREA</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.953"
                  height="27.792"
                  viewBox="0 0 64.953 27.792"
                  fill="currentColor"
                >
                  <g
                    id="Group_12"
                    data-name="Group 12"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M1708.731,1142.581c-.618,0-1.181-.008-1.743,0a1.48,1.48,0,0,1-1.443-.878,6.337,6.337,0,0,1-.028-5.766,1.52,1.52,0,0,1,1.5-.927c.542.011,1.083,0,1.718,0,0-1.431,0-2.9,0-4.371,0-1.97.934-2.913,2.9-2.907.566,0,1.131.054,1.794.088.023-.164.057-.407.089-.651a2.408,2.408,0,0,1,2.519-2.248q1.518-.022,3.037.014a2.37,2.37,0,0,1,2.493,2.5c.021,2.6.03,5.192-.009,7.788-.01.682.176.881.867.88q14.876-.032,29.753,0c.723,0,.919-.214.907-.92-.04-2.439-.021-4.88-.013-7.32.006-2.045.908-2.941,2.942-2.944.831,0,1.662-.01,2.492.006a2.418,2.418,0,0,1,2.647,2.519c.008.127.021.254.032.378.691-.032,1.35-.086,2.009-.087a2.531,2.531,0,0,1,2.751,2.766c.011,1.5,0,3,0,4.51.53,0,.989.019,1.447,0a1.8,1.8,0,0,1,1.919,1.261,6.856,6.856,0,0,1,.021,5.014,1.774,1.774,0,0,1-1.965,1.306c-.452-.043-.912-.007-1.421-.007,0,1.289-.055,2.665.012,4.036.127,2.579-1.452,3.6-4,3.227-.247-.036-.489-.108-.757-.169a9,9,0,0,1-.14,1.2,2.491,2.491,0,0,1-2.438,1.817c-.934.024-1.869.012-2.8,0a2.5,2.5,0,0,1-2.746-2.693c-.027-2.492-.008-4.984-.009-7.476v-.98h-31.5v2.351c0,2.025.007,4.05,0,6.075a2.5,2.5,0,0,1-2.7,2.724c-.831.01-1.662,0-2.492,0a2.558,2.558,0,0,1-2.892-2.641c-.01-.1-.027-.2-.04-.3-.7.047-1.387.137-2.071.129a2.511,2.511,0,0,1-2.631-2.653C1708.723,1145.653,1708.731,1144.072,1708.731,1142.581Zm6.1-3.832q0,5.648,0,11.3c0,.87.328,1.269,1.173,1.312,1.01.051,2.025.059,3.035.024a1.167,1.167,0,0,0,1.215-1.317q.009-11.256,0-22.512a1.192,1.192,0,0,0-1.354-1.332c-.857-.012-1.714-.006-2.571,0-1.14.005-1.5.357-1.5,1.471Q1714.833,1133.219,1714.834,1138.749Zm39.576,0q0,5.609,0,11.217c0,1,.335,1.378,1.325,1.418.933.037,1.87.035,2.8.007a1.166,1.166,0,0,0,1.293-1.241q.013-11.334,0-22.668a1.158,1.158,0,0,0-1.267-1.257c-.909-.019-1.818-.01-2.726,0-1.063.008-1.429.385-1.429,1.466Q1754.408,1133.215,1754.41,1138.745Zm-1.433-1.268h-31.3v2.668h31.3Zm-39.55,1.356c0-2.83,0-5.66,0-8.489a1.138,1.138,0,0,0-1.261-1.314c-.259-.01-.519-.01-.779,0a1.231,1.231,0,0,0-1.353,1.357q-.016,8.411,0,16.822c0,.993.55,1.4,1.743,1.375,1.275-.023,1.649-.335,1.651-1.414Q1713.433,1143,1713.426,1138.832Zm47.787-.09c0,2.8-.021,5.607.023,8.409.006.4.26,1.091.513,1.149a5.1,5.1,0,0,0,2.23.036c.693-.162.644-.911.639-1.515-.02-2.776-.058-5.552-.059-8.329,0-2.646.048-5.293.054-7.94,0-1.2-.435-1.537-1.886-1.528-1.168.007-1.512.349-1.514,1.541Q1761.207,1134.655,1761.213,1138.742Zm-52.424-.053c-.121-.558-.248-1.212-.407-1.858-.131-.532-.564-.485-.988-.5s-.724.074-.88.537a6.15,6.15,0,0,0-.114,3.5c.137.566.347.941,1.076.95.77.009.914-.474,1.05-.992C1708.656,1139.835,1708.693,1139.316,1708.789,1138.689Zm59.717.1c-.112-.589-.224-1.222-.354-1.852-.115-.554-.512-.6-1-.607a.81.81,0,0,0-.925.606,5.99,5.99,0,0,0-.073,3.519c.133.5.345.85,1,.867a.945.945,0,0,0,1.066-.866C1768.341,1139.926,1768.406,1139.386,1768.507,1138.787Z"
                      transform="translate(-1704.837 -1124.918)"
                    />
                  </g>
                </svg>
                <span>FITNESS CLUB</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.584"
                  height="39.957"
                  viewBox="0 0 56.584 39.957"
                  fill="currentColor"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M958.131,1122.7a3.108,3.108,0,0,1-.791-5.291,2.528,2.528,0,0,0,.755-1.644c.106-1.439.033-2.89.036-4.337.007-3.356.472-4.067,3.655-5.413,0-4.634-.009-9.34,0-14.046.009-3.714,1.24-4.964,4.888-4.966q17.927-.008,35.854,0c3.677,0,4.7,1.039,4.709,4.772.01,4.717,0,9.434,0,14.336,3.415.441,3.894,2.813,3.7,5.654a19.273,19.273,0,0,0,.031,3.875,9.445,9.445,0,0,0,1.022,2.374l.764-.181c0,.981.017,1.962-.008,2.943-.01.372-.039,1.031-.186,1.069-2.786.724-1.079,3.177-2.085,5.111-1.047-.2-2.7-.036-3.384-.771-.806-.86-.775-2.5-1.138-3.926H986.726c-7.232,0-14.464.035-21.7-.028-1.482-.013-2.153.333-2.349,1.945-.118.967.248,2.575-1.68,2.712-2.524.18-2.843-.035-2.87-2.651C958.127,1123.707,958.131,1123.178,958.131,1122.7Zm47.86-16.151c0-5.4.031-10.707-.019-16.014-.015-1.634-1.076-2.112-2.616-2.109q-18.71.049-37.42,0c-1.965-.007-2.74.812-2.72,2.725.048,4.715.017,9.431.031,14.146a5.306,5.306,0,0,0,.221,1l2.086-.21c0-1.24-.049-2.3.01-3.357.131-2.345,1.387-3.742,3.69-3.808,3.5-.1,7-.1,10.494.009,2.4.078,3.551,1.4,3.618,3.787.036,1.271.006,2.544.006,3.939l2.464-.113c0-1.327-.036-2.535.008-3.741.089-2.456,1.187-3.778,3.56-3.859,3.57-.122,7.151-.127,10.72.01,2.271.087,3.346,1.407,3.426,3.733.044,1.271.008,2.545.008,3.869Zm3.727,10.619c0-2.252.021-4.361-.006-6.469-.031-2.452-.644-3.054-3.141-3.057q-12.2-.017-24.4,0c-6.538,0-13.077.013-19.615-.01-1.5-.005-2.867.2-2.94,2.036-.1,2.481-.025,4.969-.025,7.5Zm-51.866,3.593a3.893,3.893,0,0,0,.795.2q25.683.024,51.367.042c1.833,0,1.681-.977,1.313-2.268H957.853Zm44.526-14.224c0-1.058.007-1.954,0-2.85-.024-2.835-.521-3.349-3.272-3.361-2.2-.009-4.4,0-6.6,0-5.645,0-5.684.04-5.4,5.714.006.132.121.259.24.5Zm-35.478-.079h15.185c0-1.477.276-2.851-.093-4.022a3.249,3.249,0,0,0-2.135-2.012,89.158,89.158,0,0,0-10.71,0,3.213,3.213,0,0,0-2.153,1.992A14.767,14.767,0,0,0,966.9,1106.456Zm43.311,15.953h-3.2l1.857,3.126Zm-50.446-.14v3.2l.751.266,1.468-3.288Z"
                    transform="translate(-956.188 -1086.997)"
                  />
                </svg>
                <span>LUXURY SUITES</span>
              </button>
              <button className="heading home__features__container__left__button">
                <svg
                  id="Group_11"
                  data-name="Group 11"
                  xmlns="http://www.w3.org/2000/svg"
                  width="84.459"
                  height="25.124"
                  viewBox="0 0 84.459 25.124"
                  fill="currentColor"
                >
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M2112.886,1141.708c.785-3.573-.024-6.505-3.453-8.18a5.611,5.611,0,0,0-6.3.77c-2.52,2.051-2.989,4.731-1.956,7.818l-38.653.418c0-1.294,0-2.487,0-3.681a6.015,6.015,0,0,0-3.818-5.571,6.108,6.108,0,0,0-7.888,8.051c.157.361.33.716.543,1.177-2.741,0-5.377.17-7.959-.538a7.953,7.953,0,0,1-1.139-.4c-1.214-.543-1.308-.951-.566-1.932-.262-1.635-.842-3.176.167-4.707.173-.263.127-.661.22-.987a5.628,5.628,0,0,1,2.921-3.237,21.142,21.142,0,0,1,7.015-2.4c2.959-.525,5.941-.921,8.914-1.372a.519.519,0,0,1,.183-.027c1.755.432,2.984-.683,4.321-1.47a46.5,46.5,0,0,1,13.544-5.806,33.055,33.055,0,0,1,11.117-.51c4.122.5,8.26.943,12.34,1.686a86.764,86.764,0,0,1,15.667,4.715,8.183,8.183,0,0,0,4.05.739c1.377-.172,1.708.37,1.325,1.706a1.519,1.519,0,0,0,.041.884,6.7,6.7,0,0,1,.819,3.39c-.026.171.3.39.455.6.318.432.906.88.891,1.3a24.658,24.658,0,0,1-.536,4.583,2.353,2.353,0,0,1-2.239,1.793c-2.926.342-5.838.793-8.759,1.184A10.069,10.069,0,0,1,2112.886,1141.708Zm-49.185-.406,35.855-.374a8.037,8.037,0,0,1,1.442-6.177,7.389,7.389,0,0,1,10.859-1.088,7.81,7.81,0,0,1,2.506,6.752,6.325,6.325,0,0,0,.808,0c2.64-.373,5.28-.749,7.916-1.149a1.009,1.009,0,0,0,.6-.384,6.12,6.12,0,0,0,.763-4.392c-.056-.487-.971-.873-1.491-1.308a.807.807,0,0,1-.109-.143l.247-.034c-.108-.913-.152-1.841-.343-2.736-.2-.921-.538-1.811-.767-2.554a38.177,38.177,0,0,1-3.736-.843c-2.652-.865-5.222-2-7.9-2.741-3.99-1.1-8.021-2.1-12.087-2.87-3.006-.569-6.092-.737-9.148-1.024a31.019,31.019,0,0,0-11.36.942,53.8,53.8,0,0,0-13.812,6.583,2.276,2.276,0,0,1-.915.4c-1.57.147-3.166.121-4.714.382-3.205.54-6.408,1.132-9.568,1.883a9.443,9.443,0,0,0-4.706,2.531,2.288,2.288,0,0,0-.78,2.414c-.256.331-.653.609-.647.877.023.909.2,1.814.3,2.722.056.5.081,1,.12,1.5l-.218.3,6.435.718a30.371,30.371,0,0,1,.023-3.737,7.271,7.271,0,0,1,14.42.532C2063.756,1139.254,2063.7,1140.242,2063.7,1141.3Z"
                    transform="translate(-2041.221 -1118.872)"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M2092.3,1198.563a4.775,4.775,0,0,1,9.548.172,4.879,4.879,0,0,1-4.824,4.718A4.83,4.83,0,0,1,2092.3,1198.563Zm4.763,3.6a3.5,3.5,0,0,0,3.572-3.495,3.577,3.577,0,1,0-7.153,0A3.516,3.516,0,0,0,2097.066,1202.165Z"
                    transform="translate(-2081.833 -1178.532)"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M2348.01,1199.65a4.74,4.74,0,0,1-4.792,4.774,4.774,4.774,0,1,1,.088-9.547A4.755,4.755,0,0,1,2348.01,1199.65Zm-1.189.006a3.545,3.545,0,0,0-3.529-3.56,3.561,3.561,0,1,0-.007,7.122A3.562,3.562,0,0,0,2346.821,1199.656Z"
                    transform="translate(-2277.562 -1179.301)"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M2265.614,1141.638c.312-2.336.614-4.606.938-7.045,1.527.073,3.064.114,4.6.226a48.8,48.8,0,0,1,13.319,2.836,5.54,5.54,0,0,1,1.776,1.278,1.18,1.18,0,0,1,.287,1.047,1.377,1.377,0,0,1-.971.647c-2.812.272-5.626.541-8.447.691-3.534.189-7.075.266-10.613.385A8.661,8.661,0,0,1,2265.614,1141.638Zm19.359-2.029q.016-.18.031-.36a5.689,5.689,0,0,0-.792-.427,49.8,49.8,0,0,0-16.034-2.917.8.8,0,0,0-.627.446c-.213,1.332-.354,2.675-.55,4.268Z"
                    transform="translate(-2219.628 -1131.372)"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M2177.843,1134.224c-.309,2.086-.635,4.107-.892,6.136-.076.6-.318.776-.881.8-3.011.146-6.019.335-9.029.485-3.693.183-7.386.342-11.067.511C2158.817,1137.988,2172.822,1132.872,2177.843,1134.224Zm-17.858,6.528,15.762-.772c.24-1.6.469-3.11.714-4.737A28.5,28.5,0,0,0,2159.985,1140.752Z"
                    transform="translate(-2132.458 -1130.902)"
                  />
                </svg>
                <span>SHUTTLE SERVICES</span>
              </button>
            </div>
          </div>
          <img
            src={contactImg}
            alt="contactImg"
            className="home__features__container__right"
          />
        </div>
        <div className="surrounding__container">
          <img src={ring} alt="ring" className="surrounding__container__img" />
          <div className="surrounding__container__wrapper">
            <img
              src={sorroundingImg}
              alt="sorroundingImg"
              className="surrounding__container__wrapper__img"
            />
            <div className="surrounding__container__wrapper__details">
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  NEW INTERNATIONAL AIRPORT
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  2km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  MOTORWAY M1 & M2
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  300km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  METRO STATION
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  0km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  RING ROAD
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  5km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  SRINAGAR HIGHWAY
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  0km
                </div>
              </div>
              <div className="surrounding__container__wrapper__details__entry">
                <div className="surrounding__container__wrapper__details__entry__label">
                  CPEC ROAD
                </div>
                <div className="surrounding__container__wrapper__details__entry__value">
                  15 min
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={buildingfullimg}
          alt="buildingfullimg"
          className="building__container__img"
        />
        <div className="photo__gallery__container">
          <div className="photo__gallery__container__heading heading">
            Photo Gallery
          </div>
          <PhotoGallery />
        </div>
        <div className="contact__container">
          <img src={ring} alt="ring" className="contact__container__img" />
          <div className="contact__container__content">
            <div className="contact__container__wrapper">
              <div className="contact__container__wrapper__left">
                <img
                  src={ring}
                  alt="ring"
                  className="contact__container__wrapper__left__img"
                />
                <div className="contact__container__wrapper__left__wrapper">
                  <div className="contact__container__wrapper__left__wrapper__heading heading">
                    Make your investment today
                  </div>
                  <div className="contact__container__wrapper__left__wrapper__info">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </div>
                  <img
                    src={contactImg}
                    alt="contactImg"
                    className="contact__container__wrapper__left__wrapper__img"
                  />
                </div>
              </div>
              <form action="" className="contact__container__wrapper__right">
                <div className="contact__container__wrapper__right__heading heading">
                  Request a call back
                </div>
                <div className="contact__container__wrapper__right__info">
                  Our manager will contact you soon
                </div>
                <input
                  type="text"
                  className="contact__container__wrapper__right__input"
                  placeholder="Name"
                />
                <input
                  type="tel"
                  className="contact__container__wrapper__right__input"
                  placeholder="Phone"
                />
                <button className="heading contact__container__wrapper__right__button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
