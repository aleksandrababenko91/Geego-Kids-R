const ToddlersFetchAPI = async (token, lang) => {

  const request = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/toddlercategories/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          "Accept-language": lang,
        },
      }
    )
    return await request.json();
};

export default ToddlersFetchAPI;
