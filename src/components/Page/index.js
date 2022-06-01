import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Activities from '../Activities';
import Lessons from '../Lessons';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <About />;
      case "Lessons":
        return <Lessons />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      case "Activities":
        return <Activities />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
