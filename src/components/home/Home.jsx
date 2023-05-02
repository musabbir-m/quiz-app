import React from 'react';
import Banner from './Banner';
import AboutSection from './AboutSection';
import TryItSection from './TryItSection';
import EmailSection from './EmailSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <TryItSection></TryItSection>
            <EmailSection></EmailSection>
        </div>
    );
};

export default Home;