import React, { useState } from "react";
import RoutesComponent from "./RoutesComponent";
import AppContext from "./components/AppContext";

function App() {
  const [detailsPageData, setDetailsPageData] = useState(undefined);
  const [favoritesData, setFavoritesData] = useState([]);

  const store = {
    detailsPageData: detailsPageData,
    favoritesData: favoritesData,
    setDetailsPageData,
    setFavoritesData
  };

  return (
    <AppContext.Provider value={store}>
      <RoutesComponent />
    </AppContext.Provider>
  );
}

export default App;
