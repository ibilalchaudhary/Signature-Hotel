import React, { Component } from "react";
import map_img from "../Assets/map_img.png";
import services__background__Img1 from "../Assets/services__background__Img1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
      servicesCarouselHeading: "Transport",
      servicesCarouselContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      services__background__Img: services__background__Img1,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="map__container">
          <div className="map__container__content">
            <img src={map_img} alt="map_img" className="map__container__img" />
            <div className="map__container__details">
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  NEW INTERNATIONAL AIRPORT
                </div>
                <div className="map__container__details__entry__value">2km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  MOTORWAY M1 & M2
                </div>
                <div className="map__container__details__entry__value">
                  300km
                </div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  METRO STATION
                </div>
                <div className="map__container__details__entry__value">0km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  RING ROAD 5 km
                </div>
                <div className="map__container__details__entry__value">5km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  SRINAGAR HIGHWAY
                </div>
                <div className="map__container__details__entry__value">0km</div>
              </div>
              <div className="map__container__details__entry">
                <div className="map__container__details__entry__label">
                  CPEC ROAD
                </div>
                <div className="map__container__details__entry__value">
                  15 min
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__container contact__container__second">
          <div className="contact__container__content">
            <form action="" className="contact__container__content__form">
              <div className="contact__container__content__form__left">
                <div className="contact__container__content__form__sub__heading heading">
                  Contact Us
                </div>
                <div className="contact__container__content__form__sub__heading__line"></div>
                <div className="contact__container__content__form__heading heading">
                  Get <span>in touch</span>
                </div>
                <div className="contact__container__content__form__info">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry, when an unknown printer took a galley of
                  1500.
                </div>
                <div className="contact__container__content__form__row">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact__container__content__form__input"
                  />
                  <div className="contact__container__content__form__row__spacer"></div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="contact__container__content__form__input"
                  />
                </div>
                <div className="contact__container__content__form__col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="contact__container__content__form__input"
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="contact__container__content__form__textarea"
                  ></textarea>
                </div>
                <button className="heading contact__container__content__form__button">
                  Send
                </button>
              </div>
              <div className="contact__container__content__form__right">
                <div className="contact__container__content__form__right__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6647.4614649203295!2d72.86080421597495!3d33.58633989735699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99edef0f439f%3A0xa1539f327d8b527a!2sSignature%20Hotels%20%26%20Residence!5e0!3m2!1sen!2s!4v1634017070096!5m2!1sen!2s"
                    loading="lazy"
                  ></iframe>
                  <div className="contact__container__content__form__right__bottom__content">
                    <div className="contact__container__content__form__right__phone">
                      Phone
                      <div className="contact__container__content__form__right__phone__number">
                        354 454 5344 343
                      </div>
                      <div className="contact__container__content__form__right__phone__number">
                        354 454 5344 343
                      </div>
                    </div>
                    <div className="contact__container__content__form__right__bottom__content__social__links">
                      <a className="social__links">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10.001"
                          height="20"
                          viewBox="0 0 12.001 24"
                        >
                          <path
                            id="facebook"
                            d="M16,3.985h2.191V.169A28.292,28.292,0,0,0,15,0C11.837,0,9.673,1.987,9.673,5.639V9H6.187v4.266H9.673V24h4.274V13.267h3.345L17.823,9H13.946V6.062c0-1.233.333-2.077,2.051-2.077Z"
                            transform="translate(-6.187)"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          id="instagram_1_"
                          data-name="instagram (1)"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="Path_148"
                            data-name="Path 148"
                            d="M215.219,213.109A2.109,2.109,0,1,1,213.109,211,2.109,2.109,0,0,1,215.219,213.109Zm0,0"
                            transform="translate(-201.109 -201.109)"
                            fill="#fff"
                          />
                          <path
                            id="Path_149"
                            data-name="Path 149"
                            d="M129.938,120h-7.125A2.816,2.816,0,0,0,120,122.813v7.125a2.816,2.816,0,0,0,2.813,2.813h7.125a2.816,2.816,0,0,0,2.813-2.812v-7.125A2.816,2.816,0,0,0,129.938,120Zm-3.562,9.891a3.516,3.516,0,1,1,3.516-3.516A3.52,3.52,0,0,1,126.375,129.891Zm4.031-6.844a.7.7,0,1,1,.7-.7A.7.7,0,0,1,130.406,123.047Zm0,0"
                            transform="translate(-114.375 -114.375)"
                            fill="#fff"
                          />
                          <path
                            id="Path_150"
                            data-name="Path 150"
                            d="M17.672,0H6.328A6.335,6.335,0,0,0,0,6.328V17.672A6.335,6.335,0,0,0,6.328,24H17.672A6.335,6.335,0,0,0,24,17.672V6.328A6.335,6.335,0,0,0,17.672,0Zm2.109,15.562a4.224,4.224,0,0,1-4.219,4.219H8.438a4.224,4.224,0,0,1-4.219-4.219V8.437A4.224,4.224,0,0,1,8.438,4.219h7.125a4.224,4.224,0,0,1,4.219,4.219Zm0,0"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.846"
                          height="18"
                          viewBox="0 0 25.846 21"
                        >
                          <path
                            id="twitter"
                            d="M23.19,7.487a10.577,10.577,0,0,0,2.656-2.75h0a11.066,11.066,0,0,1-3.053.837,5.271,5.271,0,0,0,2.332-2.928,10.6,10.6,0,0,1-3.36,1.283A5.3,5.3,0,0,0,12.6,7.55a5.456,5.456,0,0,0,.123,1.208A15,15,0,0,1,1.8,3.215,5.3,5.3,0,0,0,3.428,10.3a5.238,5.238,0,0,1-2.394-.653V9.7a5.324,5.324,0,0,0,4.245,5.207,5.269,5.269,0,0,1-1.389.174,4.677,4.677,0,0,1-1-.09,5.351,5.351,0,0,0,4.951,3.692,10.651,10.651,0,0,1-6.57,2.259A10.022,10.022,0,0,1,0,20.872,14.922,14.922,0,0,0,8.129,23.25,14.978,14.978,0,0,0,23.19,7.487Z"
                            transform="translate(0 -2.25)"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                      <a className="social__links">
                        <svg
                          id="google"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 25 25"
                        >
                          <g
                            id="Group_81"
                            data-name="Group 81"
                            transform="translate(0 6.969)"
                          >
                            <g id="Group_80" data-name="Group 80">
                              <path
                                id="Path_144"
                                data-name="Path 144"
                                d="M5.547,145.175l-4.258-2.458a12.418,12.418,0,0,0,.018,11.053l4.24-2.448a7.535,7.535,0,0,1,0-6.147Z"
                                transform="translate(0 -142.717)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_83"
                            data-name="Group 83"
                            transform="translate(2.106 0)"
                          >
                            <g id="Group_82" data-name="Group 82">
                              <path
                                id="Path_145"
                                data-name="Path 145"
                                d="M61.721,3.065A12.5,12.5,0,0,0,43.127,5.558l4.261,2.46A7.574,7.574,0,0,1,58.353,6.634a.808.808,0,0,0,1.087-.053L61.761,4.26A.819.819,0,0,0,61.721,3.065Z"
                                transform="translate(-43.127 0)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_85"
                            data-name="Group 85"
                            transform="translate(13.044 10.326)"
                          >
                            <g id="Group_84" data-name="Group 84">
                              <path
                                id="Path_146"
                                data-name="Path 146"
                                d="M279,212.207a.82.82,0,0,0-.813-.727H267.946a.815.815,0,0,0-.815.815v3.258a.815.815,0,0,0,.815.815h5.74a7.666,7.666,0,0,1-2.616,3.419l2.438,4.223a12.766,12.766,0,0,0,5.141-7.145A12.031,12.031,0,0,0,279,212.207Z"
                                transform="translate(-267.131 -211.479)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_87"
                            data-name="Group 87"
                            transform="translate(2.123 16.982)"
                          >
                            <g id="Group_86" data-name="Group 86">
                              <path
                                id="Path_147"
                                data-name="Path 147"
                                d="M56.936,350.271a7.562,7.562,0,0,1-9.206-2.47l-4.243,2.45a12.487,12.487,0,0,0,10.377,5.568,12.244,12.244,0,0,0,5.512-1.322Z"
                                transform="translate(-43.487 -347.801)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
