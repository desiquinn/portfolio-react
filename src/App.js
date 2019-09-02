import React from 'react';
import { Route } from 'react-router-dom';

//components
import NavBar from './components/Nav/navigation.js';
import Portfolio from './components/Main/portfolio.js';
import CaseStudyDetails from './components/Main/casestudyDetail.js';
import CallToAction from './components/Main/callToAction.js';
import Footer from './components/Footer/footer.js';


import './App.css';

function App() {
  return (
    <div>
      <NavBar />

      {/* {Routes} */}
      <Route exact path="/" component={Portfolio} />
      <Route path="/casestudy" component={CaseStudyDetails} />

      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
