import React from 'react';
import Banner from '../Banner/Banner';
import TrendyMenAndWomenSunglasses from '../TrendyMenAndWomenSunglasses/TrendyMenAndWomenSunglasses';
import TrandingProducts from '../TreandingProducts/TrandingProducts'
import UserReview from '../userReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendyMenAndWomenSunglasses></TrendyMenAndWomenSunglasses>
            <TrandingProducts></TrandingProducts>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;