import React from 'react';
import HomeHero from '../components/HomeHero';
import { Fa0, FaCottonBureau } from 'react-icons/fa6';
import { MdArrowCircleLeft, MdArrowCircleRight, MdCropOriginal, MdSupervisorAccount, MdVerified } from 'react-icons/md';
import Layout from '../layouts/Layout';
import Products from '../components/Products';

const Home = () => {
    return (
      <>
    <HomeHero/>

             <Layout>
                <Products/>

            </Layout></>
    );
}

export default Home;
