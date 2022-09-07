// import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotels/Hotel";



function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route exact path="/" element={<Home />}>  </Route>
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
      




      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
