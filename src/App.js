import React from 'react';
import { Route } from 'react-router-dom';

//components
import NavBar from './components/Nav/navigation.js';
import Portfolio from './components/Main/portfolio.js';
import CaseStudyDetails from './components/Main/casestudyDetail.js';
import CallToAction from './components/Main/callToAction.js';
import Footer from './components/Footer/footer.js';
import Contact from './components/Forms/contact.js';
import NewProjectForm from './components/Forms/newprojectform.js';


import './App.css';

function App() {
  return (
    <div>
      <NavBar />

      {/* {Routes} */}
      <Route exact path="/" component={Portfolio} />
      <Route path="/casestudy" component={CaseStudyDetails} />
      <Route path="/contact" component={Contact} />
      <Route path="/newproject" component={NewProjectForm} />

      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
