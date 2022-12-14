import React from 'react';
import Banner from '../Banner/Banner';
import FirstChoice from '../FirstChoice/FirstChoice';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero />
            <FirstChoice></FirstChoice>
        </div>
    );
};

export default Home;