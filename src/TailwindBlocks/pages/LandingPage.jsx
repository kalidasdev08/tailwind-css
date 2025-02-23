import React from 'react'
import ContentSection from '../components/ContentSection'
import FeautureSection from '../components/FeautureSection'
import GallerySection from '../components/GallerySection'
import HeroSection from '../components/HeroSection'
import NavBarSection from '../components/NavBarSection'
import PricingSection from '../components/PricingSection'
import TeamSection from '../components/TeamSection'
import TestmonialSection from '../components/TestmonialSection'
import { AddressSection } from '../components/AddressSection'
import { FooterSection } from '../components/FooterSection'

export const LandingPage = ({change}) => {
  return (
    <div>
        <NavBarSection change={change}/>
        <HeroSection/>
        <ContentSection/>
        <GallerySection/>
        <FeautureSection/>
        <PricingSection/>
        <TeamSection/>
        <TestmonialSection/>
        <AddressSection/>
        <FooterSection/>
    </div>
  )
}
export default LandingPage