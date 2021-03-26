const getDataFromApi = (show) => {
  return fetch(`http://api.tvmaze.com/search/shows?q=${show}`)
    .then((response) => response.json())
    .then((data) => {
      /* return data; */
      let shows = [];
      for (const dataItem of data) {
        shows.push({
          id: dataItem.show.id,
          name: dataItem.show.name,
        });
      }
      return shows;
    });
};

export default getDataFromApi;
