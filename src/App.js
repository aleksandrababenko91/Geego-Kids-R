import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Header from './component/Header/Header';
import ChallengesTasks from "./component/Challenges/ChallengesTasks";
import SkillsTasks from "./component/Skills/SkillsTasks";
import Toddlers from "./component/Toddlers/Toddlers";
import ToddlersTasks from "./component/Toddlers/ToddlersTasks";
import Login from "./component/Login";
import useToken from "./useToken";
import ChallengesFetchAPI from "./ChallengesFetchAPI";
import ToddlersFetchAPI from "./ToddlersFetchAPI";
import SkillsFetchAPI from "./SkillsFetchAPI";
import "./App.css";
import Challenges from './component/Challenges/Challenges';
import Skills from './component/Skills/Skills';
import Footer from './component/Footer/Footer';
import i18n from './i18n'; 


const App = () => {
  const { token, setToken } = useToken();

  const [challengesState, setChallengesState] = useState();
  const [skillsState, setSkillsState] = useState();
  const [toddlersState, setToddlersState] = useState();

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "fi";
  });

  const fetchData = async (lang) => {
    if (!token) return;

    const challenges = await ChallengesFetchAPI(token, lang);
    const skills = await SkillsFetchAPI(token, lang);
    const toddlers = await ToddlersFetchAPI(token, lang);

    setChallengesState(challenges);
    setSkillsState(skills);
    setToddlersState(toddlers);
  };

  useEffect(() => {
    fetchData(language);
  }, [token, language]);


  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("lang", newLang); 
    i18n.changeLanguage(newLang); 

  };

  return !token ? (
    <Login 
    setToken={setToken} 
    currentLocale={language} 
    onLanguageChange={handleLanguageChange}   />
  ) : (
    <div>
      <Router>
      <Header 
        token={token} 
        currentLocale={language} 
        onLanguageChange={handleLanguageChange} 
      />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AtNurseries" element={<AtNurseries />}></Route>
          <Route path="/AtSchool" element={<AtSchool />}></Route>
          <Route
            path="/Challenges"
            element={<Challenges challengesState={challengesState} />}
          ></Route>
          <Route
            path="/Challenges/:title"
            element={<ChallengesTasks challengesState={challengesState} />}
          ></Route>
          <Route
            path="/Skills"
            element={<Skills skillsState={skillsState} />}
          ></Route>
          <Route
            path="/Skills/:title"
            element={<SkillsTasks skillsState={skillsState} />}
          ></Route>
          <Route
            path="/Toddlers"
            element={<Toddlers toddlersState={toddlersState} />}
          ></Route>
          <Route
            path="/Toddlers/:title"
            element={<ToddlersTasks toddlersState={toddlersState} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
