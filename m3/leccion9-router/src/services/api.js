const getDataFromApi = () => {
  return fetch('http://api.tvmaze.com/search/shows?q=girls')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getDataFromApi;
