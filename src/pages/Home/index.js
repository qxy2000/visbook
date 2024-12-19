import React from 'react';
import Header from '../../components/Header';
import InstructorList from '../../components/InstructorList';
import TabsContent from '../../components/TabsContent';
import FooterSection from '../../components/Footer';
import './index.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <TabsContent />
      <FooterSection />
    </div>
  );
};

export default Home;
