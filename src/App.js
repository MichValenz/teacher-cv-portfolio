import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import Navigation from "./components/Nav";
import Page from "./components/Page";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { IconContext } from "react-icons";

function App() {
  const [pages] = useState([
    {
      name: "About Me",
    },
    { name: "Resume" },
    { name: "Lessons" },
    {
      name: "Activities",
    },
    {
      name: "Contact",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <>
      <div className="App">
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <div className="hero">
          <div className="hero-section"></div>
        </div>
      </div>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>

      <section id="my-contact" className="contact">
        <div className="contact-info">
          <IconContext.Provider value={{ size: "3em", color: "#2e374d" }}>
            <h3>Contact Information</h3>
            <p>Have any questions? Contact me:
            </p>
            <a href="tel:432-556-0801">
              <AiFillPhone />
            </a>
            <a href="mailto:cristinaovalenz@gmail.com" alt="email" target="blank">
              <AiFillMail />
            </a>

          </IconContext.Provider>
        </div>
      </section>

      <footer>Website created by: MV</footer>
    </>
  );
}

export default App;
