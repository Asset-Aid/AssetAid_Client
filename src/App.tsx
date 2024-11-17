import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "./AuthContext";
import RecommendMain from "./routes/RecommendMain";
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
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecommendMain />,
    // children: [{ path: "/recommend", element: <RecommendMain /> }],
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
