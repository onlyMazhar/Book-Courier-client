import React from 'react';
import Container from '../../Components/Container';
import Banner from './Banner/Banner';
import LatestBooks from './LatestBooks/LatestBooks';
import CoverageMap from './Coverage/CoverageMap';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import HowItWorks from './HowItWorks/HowItWorks';
import ImpactStats from './ImpactStats/ImpactStats';
import Testimonials from './Testimonials/Testimonials';
import RequestBookForm from './RequestBookForm/RequestBookForm';

const Home = () => {
    return (
        <>
            <Banner />
            <Container>
                <LatestBooks/>
                <CoverageMap />
                <WhyChooseUs/>
                <HowItWorks/>
                <ImpactStats/>
                <Testimonials/>
                <RequestBookForm/>
            </Container>
        </>
    );
};

export default Home;