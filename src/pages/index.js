import React from "react"

import Layout from "../components/layout"

import HomeAbout from './../components/home/HomeAbout';
import HomeColumns from './../components/home/HomeColumns';
import HomeContact from './../components/home/HomeContact';
import HomeFooter from './../components/home/HomeFooter';
import HomeHeader from './../components/home/HomeHeader';
import HomePartners from './../components/home/HomePartners';
import HomeSteps from './../components/home/HomeSteps';

const IndexPage = () => {

  return (
    <Layout>
      <HomeHeader />
      <HomeColumns />
      <HomeSteps />
      <HomeAbout />
      <HomePartners />
      <HomeContact />
      <HomeFooter />
    </Layout>
  )
}

export default IndexPage
