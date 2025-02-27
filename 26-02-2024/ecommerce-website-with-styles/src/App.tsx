import HomePage from "./pages/HomePage";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
