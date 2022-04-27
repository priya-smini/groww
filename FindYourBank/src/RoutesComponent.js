import MainLayout from "./MainLayout";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { AllBanks, BankDetails, Favorites } from "./views";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/all-banks"
          element={
            <MainLayout>
              <AllBanks />
            </MainLayout>
          }
        />
        <Route
          path="/bank-details/:ifsc_code"
          element={
            <MainLayout>
              <BankDetails />
            </MainLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <MainLayout>
              <Favorites />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
