import React, { useState, useCallback, Component } from "react";
import ImageViewer from "react-simple-image-viewer";
import ring from "../Assets/ring.png";
import BuildingDetailPic from "../Assets/BuildingDetailPic.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";
import about__backgound from "../Assets/about__backgound.png";
import about__pic from "../Assets/about__pic.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
export default class AboutUsScreen extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main__section__container">
          <img
            src={about__backgound}
            alt="about__backgound"
            className="main__section__container__img"
          />
          <div className="main__section__container__wrap">
            <div className="main__section__container__about__us">
              <div className="main__section__container__about__us__wrapper">
                <div className="main__section__container__about__us__heading heading">
                  About Us
                </div>
                <div className="main__section__container__about__us__sub__heading">
                  SIGNATURE HOTEL AND RESIDENCE IS ONE OF THE DYNAMIC AND
                  VERSATILE PROJECTS OF J7 GROUP, LOCATED AT TOP CITY 01,
                  ISLAMABAD. IT IS THE SOLE 5-STAR OPULENT HOTEL NEAREST &
                  ACCESSIBLE TO NEW ISLAMABAD INTERNATIONAL AIRPORT.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__section__our__vision">
          <div className="main__section__our__vision__container">
            <div className="main__section__our__vision__wrapper">
              <div className="our__vision__headings">
                Our Vision
                <div className="our__vision__sub__heading">
                  SUMPTUOUS SURROUNDINGS, UNFORGETTABLE STAYS
                </div>
              </div>
              <div className="main__section__our__vision__wrapper__content">
                <div className="main__section__our__vision__wrapper__left">
                  <img
                    src={about__pic}
                    alt="about__pic"
                    className="main__section__our__vision__wrapper__left__top"
                  />
                  <div className="main__section__our__vision__wrapper__left__bottom">
                    <img src={about__pic} alt="about__pic" />
                    <div className="main__section__our__vision__wrapper__left__bottom__spacer"></div>
                    <img src={about__pic} alt="about__pic" />
                  </div>
                </div>
                <div className="main__section__our__vision__wrapper__right">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                </div>
              </div>
            </div>
            <img
              src={ring}
              alt=""
              className="main__section__our__vision__ring"
            />
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
        <div className="photo__gallery__container">
          <div className="photo__gallery__container__heading heading">
            Photo Gallery
          </div>
          <PhotoGallery />
        </div>
        <Footer />
      </div>
    );
  }
}
