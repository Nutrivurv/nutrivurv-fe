import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Footer from "../footer/footer";
const colorTheme = {
  background: "transparent",
  text: "#000",
  grade4: "#4D8037",
  grade3: "#9ABA19",
  grade2: "#1F7DA2",
  grade1: "#00426C",
  grade0: "#ebedf0",
};

const About = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div>
          <h2>About Us</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="d-flex justify-content-center bg-secondary text-light p-2">
        <h3> Team Lead</h3>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-wrap mb-4 p-5">
          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="block">
              <div className="d-flex justify-content-center">
                <h4>Dave Vazquez</h4>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/dave-vazquez.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="dave-vazquez"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center bg-secondary text-light p-2">
        <h3> Front End Web Developers</h3>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-wrap mb-4 p-5">
          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="block">
              <div className="d-flex justify-content-center">
                <h4>Alessandra Longaretti</h4>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/alesslongaretti.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="alesslongaretti"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>
          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="d-block">
              <div className="d-flex justify-content-center">
                <h4>Taty Novell</h4>
              </div>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/taty2010.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="taty2010"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>

          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="block">
              <div className="d-flex justify-content-center">
                <h4>Christine Smith</h4>
              </div>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/ccsmith13.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="ccsmith13"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center bg-secondary text-light p-2">
        <h3> Back End Web Developers</h3>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-wrap mb-4 p-5">
          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="block">
              <div className="d-flex justify-content-center">
                <h4>Cody Brewer</h4>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/codybrewer.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="codybrewer"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center p-2 mb-2 mt-4">
            <div className="d-block">
              <div className="d-flex justify-content-center">
                <h4>Dominic Bridgette</h4>
              </div>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/afrodo1.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="afrodo1"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center bg-secondary text-light p-2">
        <h3> iOS Developers</h3>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-wrap mb-4 p-5">
          <div className="d-flex p-2 mb-2 mt-4 justify-content-center">
            <div className="block">
              <div className="d-flex justify-content-center">
                <h4>Dillon Petretti</h4>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/dillonp23.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="dillonp23"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center p-2 mb-2 mt-4">
            <div className="d-block">
              <div className="d-flex justify-content-center">
                <h4>Fabiola Saldivar</h4>
              </div>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://github.com/fabiolasaga.png"
                  className="img-responsive"
                  width="150px"
                />
              </div>
              <div>
                <GitHubCalendar
                  username="fabiolasaga"
                  fontSize={10}
                  blockSize={5}
                  theme={colorTheme}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
