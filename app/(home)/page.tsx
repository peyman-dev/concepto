import CareerOpportunities from "@/components/templates/home/career-opportunities";
import Categories from "@/components/templates/home/categories";
import HeroSection from "@/components/templates/home/hero";
import Instructions from "@/components/templates/home/instructions";
import Investment from "@/components/templates/home/investment";
import PopularCompanies from "@/components/templates/home/popular-companies";
import RecentEvents from "@/components/templates/home/recent-events";
import RecentNews from "@/components/templates/home/recent-news";
import React from "react";

const HomePage = () => {
  return (
    <main className="space-y-40">
      <HeroSection />
      <Investment />
      <Instructions />
      <Categories />
      <PopularCompanies />
      <CareerOpportunities />
      <RecentNews />
      <RecentEvents />
    </main>
  );
};

export default HomePage;
