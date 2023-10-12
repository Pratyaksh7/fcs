import Page1 from "./Page1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page2 from "./Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
