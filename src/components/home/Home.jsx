import React from 'react';
import Banner from './Banner';
import AboutSection from './AboutSection';
import TryItSection from './TryItSection';
import EmailSection from './EmailSection';
import Categories from '../home/categories/Categories'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Categories></Categories>
            <TryItSection></TryItSection>
            <EmailSection></EmailSection>
        </div>
    );
};

export default Home;