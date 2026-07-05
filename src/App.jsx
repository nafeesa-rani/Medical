import React, { useEffect, useState } from 'react';

import Navbar from './assets/Components/navbar';
import Homepage from './assets/Components/homepage';
import AboutPage from './assets/Components/Aboutpage';
import AboutPage2 from './assets/Components/Aboutpart2';
import AboutPage3 from './assets/Components/aboutpart3';
import Courses from './assets/Components/courses';
import Faculty from './assets/Components/faculty';
import Number from './assets/Components/Numbers';
import Imageheading from './assets/Components/imgheading';
import ImageCarousel from './assets/Components/ImageCarousel';
import Location from './assets/Components/Location';
import Footer from './assets/Components/Footer';
import AdmissionsPage from './assets/Components/admissions';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [pendingSection, setPendingSection] = useState(null);

  const handleNavigate = (type, target) => {
    if (type === 'page') {
      setActivePage(target);
      setPendingSection(null);
      return;
    }

    if (activePage === 'admissions') {
      setActivePage('home');
      setPendingSection(target);
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activePage === 'home' && pendingSection) {
      const element = document.getElementById(pendingSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
      setPendingSection(null);
    }
  }, [activePage, pendingSection]);

  const renderContent = () => {
    if (activePage === 'admissions') {
      return <AdmissionsPage onBack={() => setActivePage('home')} />;
    }

    return (
      <>
        <Homepage onNavigate={handleNavigate} />
        <AboutPage />
        <AboutPage2 />
        <AboutPage3 />
        <Courses />
        <Faculty />
        <Number />
        <Imageheading />
        <ImageCarousel />
        <Location />
        <Footer />
      </>
    );
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} />
      {renderContent()}
    </div>
  );
};

export default App;