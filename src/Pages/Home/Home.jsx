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
import BookCategories from './BookCategories/BookCategories';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import BookHighlights from './BookHighlights/BookHighlights';
import BlogSection from './BlogSection/BlogSection';
import Newsletter from './Newsletter/Newsletter';
import FAQ from './FAQ/FAQ';
import CallToAction from './CallToAction/CallToAction';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';

const Home = () => {
    return (
        <>
            {/* Hero Section with limited height and scroll indicator */}
            <div className="relative h-[70vh] ">
                <Banner />
                <div className='z-50 absolute left-1/2 -bottom-18'>
                    <ScrollIndicator />
                </div>
            </div>

            <Container>
                {/* Section 1: Latest Books */}
                <LatestBooks />

                {/* Section 2: Book Categories */}
                <BookCategories />

                {/* Section 3: Featured Services */}
                <FeaturedServices />

                {/* Section 4: Book Highlights */}
                <BookHighlights />

                {/* Section 5: How It Works */}
                <HowItWorks />

                {/* Section 6: Why Choose Us */}
                <WhyChooseUs />

                {/* Section 7: Impact Statistics */}
                <ImpactStats />

                {/* Section 8: Coverage Map */}
                <CoverageMap />

                {/* Section 9: Testimonials */}
                <Testimonials />

                {/* Section 10: Blog Section */}
                <BlogSection />

                {/* Section 11: FAQ */}
                <FAQ />

                {/* Section 12: Newsletter */}
                <Newsletter />

                {/* Section 13: Request Book Form */}
                <RequestBookForm />

                {/* Section 14: Final Call to Action */}
                <CallToAction />
            </Container>
        </>
    );
};

export default Home;