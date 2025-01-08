import React from "react";
// import { useTranslation } from 'react-i18next';
// import { Link } from "react-router-dom";
// import Button from "./Button";
// import "./Home.css";
import Card from './Home/Card';
import './Home/Categories.css';
import { items} from './Home/items';
import { createKey } from './Home/createKey';
import HeroSection from './Home/HeroSection/HeroSection';

const Home = () => {

  // const { t } = useTranslation();

  return (
    <div>
    <HeroSection />
    <div className="roleSection">
      <div className="container">
        <div className="content">
        {items.map((item) => {
          const cardKey = createKey();
          return (
            <Card 
            key={cardKey}
            image={item.image}
            title={item.title}
            description={item.description}
            cardBackground={item.cardBackground}
            url={item.url}
            />
            
          );
        })}
        </div>
      </div>
    </div>

        </div>


//     <div className="Home">
//       <h1>{t('home')}</h1>
//       <div className="Buttons">
//         <Link to="/Challenges">
//           <Button 
//             imgUrl="/image/2023/ikoni_geegocity.png"
//             name={t('home-city')}
//             bgColor="#6B377C"
//             bgColor2="rgb(124 54 147 / 30%)"
//             description={t('home-city-description')}
//           />
//         </Link>
//         <Link to="/Skills">
//           <Button
//             imgUrl="/image/2023/ikoni_sporttiparkki.png"
//             name={t('home-sport')}
//             bgColor="#0074AC"
//             bgColor2="rgb(31 130 178 / 30%)"
//             description={t('home-sport-description')}
//           />
//         </Link>
//         <Link to="/Toddlers">
//           <Button
//             imgUrl="/image/2023/ikoni_koulu.png"
//             name={t('home-school')}
//             bgColor="#EB6A39"
//             bgColor2="rgb(235, 106, 57 / 0.3)"   
//             description={t('home-school-description')}
//           />
//         </Link>
        

//       </div>
//     <div>

//       <p></p>
//     </div>
//       <div>
     
//   <p className="feedback-form-link">
//     <a
//       href="http://www.geegokids.com/palaute"
//       target="_blank"
//       rel="noreferrer"
//       className="feedback-button"
//     >
//       {t('feedback-code-link')}
//     </a>
//   </p>
// </div>
//   <p className="feedback-note">
//         {t('feedback-note')}
// </p>     
//     </div>

  );
};

export default Home;
