import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import AtNurseries from "./component/AtNurseries";
import AtSchool from "./component/AtSchool";
import Menubar from "./component/Menubar";
import Header from './component/Header/Header';

import ChallengesTasks from "./component/Challenges/ChallengesTasks";
// import Skills from "./component/Skills";
import SkillsTasks from "./component/Skills/SkillsTasks";
// import SkillsTasks from "./component/SkillsTasks";
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


const App = () => {
  const { token, setToken } = useToken();

  const [challengesState, setChallengesState] = useState();
  const [skillsState, setSkillsState] = useState();
  const [toddlersState, setToddlersState] = useState();

  useEffect(() => {
    const fetchChallenges = async () => {
      if (!token) {
        return;
      }

      var currentlang = localStorage.getItem("lang");
      if (currentlang == null || currentlang.length !== 2) {
        currentlang = "fi";
      }
      const data = await ChallengesFetchAPI(token, currentlang);
      setChallengesState(data);
    };
    fetchChallenges();
  }, [token]);

  useEffect(() => {
    if (!token) {
      return;
    }

    var currentlang = localStorage.getItem("lang");
    if (currentlang == null || currentlang.length !== 2) {
      currentlang = "fi";
    }
    const fetchSkills = async () => {
      const data = await SkillsFetchAPI(token, currentlang);
      setSkillsState(data);
    };
    fetchSkills();
  }, [token]);

  useEffect(() => {
    if (!token) {
      return;
    }

    var currentlang = localStorage.getItem("lang");
    if (currentlang == null || currentlang.length !== 2) {
      currentlang = "fi";
    }
    const fetchToddlers = async () => {
      const data = await ToddlersFetchAPI(token, currentlang);
      setToddlersState(data);
    };
    fetchToddlers();
  }, [token]);

  return !token ? (
    <Login setToken={setToken} />
  ) : (
    <div >
      <Router>
        {/* <Menubar token={token} /> */}
        <Header token={token} />
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
