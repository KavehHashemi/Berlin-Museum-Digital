import { Routes, Route } from "react-router-dom";
import "./App.css";
import Institutuions from "./components/Institutuions";
import Institution from "./components/Institution";
import Collection from "./components/Collection";
import Object from "./components/Object";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Institutuions></Institutuions>}></Route>
      <Route
        path={`/institutions/*`}
        element={<Institution></Institution>}
      ></Route>
      <Route
        path={`/collections/*`}
        element={<Collection></Collection>}
      ></Route>
      <Route path={`/objects/collection/*`} element={<Object></Object>}></Route>
    </Routes>
  );
};

export default App;
