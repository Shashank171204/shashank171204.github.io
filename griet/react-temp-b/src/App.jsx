import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";
import App10 from "./components/App10";
import App11 from "./components/App11";
import App12 from "./components/App12";
import App13 from "./components/App13";
import App14 from "./components/App14";
import App15 from "./components/App15";
import App16 from "./components/App16";
import App17 from "./components/App17";
function App() {

  return (
    <BrowserRouter>
      <div>
          <div className="App-Row">
          <Link to="app1" className="box">
            App1
          </Link>
          <Link to="app2" className="box">
            App2
          </Link>
          <Link to="app3" className="box">
            App3
          </Link>
          <Link to="app4" className="box">
            App4
          </Link>
          <Link to="app5" className="box">
            App5
          </Link>
          <Link to="app6" className="box">
            App6
          </Link>
          <Link to="app7" className="box">
            App7
          </Link>
          <Link to="app8" className="box">
            App8
          </Link>
          <Link to="app9" className="box">
            App9
          </Link>
          <Link to="app10" className="box">
            App10
          </Link>
          <Link to="app11" className="box">
            App11
          </Link>
          <Link to="app12" className="box">
            App12
          </Link>
          <Link to="app13" className="box">
            App13
          </Link>
          <Link to="app14" className="box">
            App14
          </Link>
          <Link to="app15" className="box">
            App15
          </Link>
          <Link to="app16" className="box">
            App16
          </Link>
          <Link to="app17" className="box">
            App17
          </Link>
        </div>
        <hr></hr>
        <div>
          <Routes>
            <Route index element={<App1 />} />
            <Route path="app1" element={<App1 />} />
            <Route path="app2" element={<App2 />} />
            <Route path="app3" element={<App3 />} />
            <Route path="app4" element={<App4 />} />
            <Route path="app5" element={<App5 />} />
            <Route path="app6" element={<App6 />} />
            <Route path="app7" element={<App7 />} />
            <Route path="app8" element={<App8 />} />
            <Route path="app9" element={<App9 />} />
            <Route path="app10" element={<App10 />} />
            <Route path="app11" element={<App11 />} />
            <Route path="app12" element={<App12 />} />
            <Route path="app13" element={<App13 />} />
            <Route path="app14" element={<App14 />} />
            <Route path="app15" element={<App15 />} />
            <Route path="app16" element={<App16 />} />
            <Route path="app17" element={<App17 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;