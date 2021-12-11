import React, { Component, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import ring from "../Assets/ring.png";
import contactImg from "../Assets/contactImg.png";
import plansImage1 from "../Assets/plans/1.png";
import plansImage2 from "../Assets/plans/2.png";
import photoGalleryImg1 from "../Assets/photo-gallery/1.png";
import photoGalleryImg2 from "../Assets/photo-gallery/2.png";
import photoGalleryImg3 from "../Assets/photo-gallery/3.png";
import photoGalleryImg4 from "../Assets/photo-gallery/4.png";
import photoGalleryImg5 from "../Assets/photo-gallery/5.png";
import photoGalleryImg6 from "../Assets/photo-gallery/6.png";
import Header from "../Components/Header";
import construction_update__img from "../Assets/construction_update__img.png";
import work__img from "../Assets/work__img.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../Components/Footer";

function ConstructionUpdateControl({ defaultChecked, onChange }) {
  return (
    <div className="construction__update__container__wrapper_content__carousel__progress__controls__button">
      <input
        type="radio"
        name="construction__update__container__wrapper_content__carousel__progress__controls__button"
        id=""
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="construction__update__container__wrapper_content__carousel__progress__controls__button__input"
      />
      <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper">
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot">
          <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__dot__small"></div>
        </div>
        <div className="construction__update__container__wrapper_content__carousel__progress__controls__button__wrapper__time">
          10/3/21
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
export default class ConstructionUpdateScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
      constructionUpdateTitle: "Project Name",
      constructionUpdateContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      constructionUpdateImg: work__img,
      constructionUpdateProgress: 66,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="construction__update__container">
          <img
            src={construction_update__img}
            alt="construction update__img"
            className="construction__update__container__img"
          />
          <div className="construction__update__container__wrapper">
            <div className="construction__update__container__wrapper__content">
              <div className="construction__update__container__wrapper_content__carousel">
                <img
                  src={this.state.constructionUpdateImg}
                  alt="work__img"
                  className="construction__update__container__wrapper_content__carousel__img"
                />
                <div className="construction__update__container__wrapper_content__carousel__wrapper">
                  <div className="construction__update__container__wrapper_content__carousel__wrapper__content">
                    <div className="construction__update__container__wrapper_content__carousel__left">
                      <div className="construction__update__container__wrapper_content__carousel__heading heading">
                        {this.state.constructionUpdateTitle}
                      </div>
                      <div className="construction__update__container__wrapper_content__carousel__info">
                        {this.state.constructionUpdateContent}
                      </div>
                    </div>
                    <div className="construction__update__container__wrapper_content__carousel__right">
                      <CircularProgressbar
                        value={this.state.constructionUpdateProgress}
                        text={`${this.state.constructionUpdateProgress}%`}
                        strokeWidth={3}
                        styles={{
                          trail: {
                            stroke: "#ffffff",
                          },
                          path: {
                            stroke: "#dfb449",
                          },
                          text: {
                            fill: "#dfb449",
                          },
                        }}
                        counterClockwise={true}
                      />
                      ;
                    </div>
                  </div>
                </div>
              </div>
              <div className="construction__update__container__wrapper_content__carousel__progress__controls">
                <div className="construction__update__container__wrapper_content__carousel__progress__controls__bar"></div>
                <ConstructionUpdateControl
                  defaultChecked={true}
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 1",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 50,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 2",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 55,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 3",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 60,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 4",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 65,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 5",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 79,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 6",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 80,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 7",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 90,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 8",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 30,
                    });
                  }}
                />
                <ConstructionUpdateControl
                  onChange={() => {
                    this.setState({
                      constructionUpdateTitle: "Project name 9",
                      constructionUpdateContent:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                      constructionUpdateImg: work__img,
                      constructionUpdateProgress: 15,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="plans__container">
          <div className="plans__container__heading">Upcoming Plans</div>
          <div className="plans__container__content">
            <div className="plans__container__content__card">
              <img
                src={plansImage1}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </div>
              </div>
            </div>
            <div className="plans__container__content__card">
              <img
                src={plansImage1}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </div>
              </div>
            </div>
            <div className="plans__container__content__card">
              <img
                src={plansImage2}
                alt="plansImage"
                className="plans__container__content__card__img"
              />
              <div className="plans__container__content__card__content">
                <div className="plans__container__content__card__content__heading heading">
                  Project Name
                </div>
                <div className="plans__container__content__card__content__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo__gallery__container">
          <div className="photo__gallery__container__heading">
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
      </div>
    );
  }
}
