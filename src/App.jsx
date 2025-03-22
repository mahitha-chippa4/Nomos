import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing/>
            </>
          }
        />

        <Route
          path="/chat"
          element={
            <>
             <Sidebar />
              <Main />
             
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
