import React, { useState } from "react";
import RoutesComponent from "./RoutesComponent";
import AppContext from "./components/AppContext";

function App() {
  const [detailsPageData, setDetailsPageData] = useState(undefined);
  const [setting2value, setSetting2value] = useState(false);

  const store = {
    detailsPageData: detailsPageData,
    setting2name: setting2value,
    setDetailsPageData,
    // toggleSetting2,
  };

  return (
    <AppContext.Provider value={store}>
      <RoutesComponent />
    </AppContext.Provider>
  );
}

export default App;
