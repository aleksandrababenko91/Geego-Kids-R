import React from "react";
// import { useTranslation } from 'react-i18next';
// import { Link } from "react-router-dom";
// import Button from "./Button";

import './Home/Categories.css';
import { items} from './Home/items';
import { createKey } from './Home/createKey';
import HeroSection from './Home/HeroSection/HeroSection';
import Categories from './Home/Categories';

const Home = () => {

  // const { t } = useTranslation();

  return (
    <div>
      <HeroSection />
      <Categories />
    </div>
  );
};

export default Home;
