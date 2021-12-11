import React, { Component, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUsScreen from "./Screens/AboutUsScreen";
import LoadingScreen from "./Screens/LoadingScreen";
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));
const WelcomeScreen = lazy(() => import("./Screens/WelcomeScreen"));
const ServicesScreen = lazy(() => import("./Screens/ServicesScreen"));
const LocationScreen = lazy(() => import("./Screens/LocationScreen"));
const ConstructionUpdateScreen = lazy(() =>
  import("./Screens/ConstructionUpdateScreen")
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="App">
        <Router>
          <div className="side__panel">
            <a
              href="http://www.africau.edu/images/default/sample.pdf"
              className="side__panel__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.032"
                height="16.037"
                viewBox="0 0 14.032 16.037"
              >
                <g id="brochure" transform="translate(-32)">
                  <path
                    id="Path_133"
                    data-name="Path 133"
                    d="M251.33,79h4.657v1.722H251.33Z"
                    transform="translate(-212.46 -76.526)"
                    fill="#530934"
                  />
                  <path
                    id="Path_134"
                    data-name="Path 134"
                    d="M179.8,0h-7.265a1.2,1.2,0,0,0-1.2,1.2V12.421a.47.47,0,0,0,.47.47h8a1.2,1.2,0,0,0,1.2-1.2V1.2A1.2,1.2,0,0,0,179.8,0Zm-5.034,11.714h-1.4a.47.47,0,0,1,0-.94h1.4a.47.47,0,0,1,0,.94Zm3.49-1.566h-4.887a.47.47,0,1,1,0-.94h4.887a.47.47,0,1,1,0,.94ZM172.9,8.112a.47.47,0,0,1,.47-.47h4.343a.47.47,0,1,1,0,.94h-4.343A.47.47,0,0,1,172.9,8.112Zm6.066-1.1h-5.6a.47.47,0,1,1,0-.94h5.6a.47.47,0,1,1,0,.94Zm.47-2.349a.47.47,0,0,1-.47.47h-5.6a.47.47,0,0,1-.47-.47V2a.47.47,0,0,1,.47-.47h5.6a.47.47,0,0,1,.47.47Z"
                    transform="translate(-134.966)"
                    fill="#530934"
                  />
                  <path
                    id="Path_135"
                    data-name="Path 135"
                    d="M35.424,90.351v-9.9H33.2a1.2,1.2,0,0,0-1.2,1.2V92.765a1.2,1.2,0,0,0,1.2,1.2h7.122L36.2,91.61A1.411,1.411,0,0,1,35.424,90.351Z"
                    transform="translate(0 -77.93)"
                    fill="#530934"
                  />
                  <path
                    id="Path_136"
                    data-name="Path 136"
                    d="M240.249,443.373a.482.482,0,0,0,.008-.086V441.55H237.01Z"
                    transform="translate(-198.589 -427.72)"
                    fill="#530934"
                  />
                </g>
              </svg>
              Download Brouchure
            </a>
            <Link
              to="/location"
              className="side__panel__link side__panel__link__primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.375"
                height="14.375"
                viewBox="0 0 14.375 14.375"
              >
                <g id="call" opacity="0.89">
                  <g id="Group_71" data-name="Group 71">
                    <path
                      id="Path_132"
                      data-name="Path 132"
                      d="M13.221,9.435a8.162,8.162,0,0,1-2.563-.408,1.172,1.172,0,0,0-1.139.24L7.9,10.488A8.932,8.932,0,0,1,3.887,6.472L5.071,4.9a1.162,1.162,0,0,0,.286-1.177,8.174,8.174,0,0,1-.41-2.567A1.155,1.155,0,0,0,3.793,0H1.153A1.155,1.155,0,0,0,0,1.153,13.236,13.236,0,0,0,13.221,14.375a1.155,1.155,0,0,0,1.153-1.153V10.589A1.155,1.155,0,0,0,13.221,9.435Z"
                      fill="#530934"
                    />
                  </g>
                </g>
              </svg>
              Contact Us
            </Link>
          </div>
          <Switch>
            <Route path="/" exact>
              <WelcomeScreen />
            </Route>
            <Route path="/home-commercial">
              <HomeScreen selected="commercial" />
            </Route>
            <Route path="/home-services">
              <HomeScreen selected="services" />
            </Route>
            <Route path="/home-suites">
              <HomeScreen selected="suites" />
            </Route>
            <Route path="/home-apartments">
              <HomeScreen selected="apartments" />
            </Route>
            <Route path="/features">
              <ServicesScreen />
            </Route>
            <Route path="/location">
              <LocationScreen />
            </Route>
            <Route path="/construction_update">
              <ConstructionUpdateScreen />
            </Route>
            <Route path="/about-us">
              <AboutUsScreen />
            </Route>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}
