import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import RecommendMain from "./routes/RecommendMain";
import MyPage from "./routes/MyPage";
import EditUserInfo from "./routes/EditUserInfo";
import FinancialProfile from "./routes/FinancialProfile";
import FinancialGoals from "./routes/FinancialGoal";
import LikedItems from "./routes/LikedItems";
import DepositSearch from "./routes/DepositSearch";
import SavingSearch from "./routes/SavingSearch";
import CardSearch from "./routes/CardSearch";
import GuestMain from "./routes/GuestMain";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }

  #root {
    width: 360px;
    height: 640px;
    background-color: white;
    border: 1px solid #ccc;
    overflow-y: auto; 
    overflow-x: hidden;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestMain />,
  },
  {
    path: "/DepositSearch",
    element: <DepositSearch />,
  },
  {
    path: "/SavingSearch",
    element: <SavingSearch />,
  },
  {
    path: "/CardSearch",
    element: <CardSearch />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

]);
function App() {
  return (
    <div>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
