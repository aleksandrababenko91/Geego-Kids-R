import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    // console.log("getToken", userToken);
    return userToken?.key;
  };

  const [token, setToken] = useState(getToken());
  // console.log("useState", token, setToken);

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.key);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
