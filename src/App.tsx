import { Routes, Route } from "react-router-dom";
import Institutuions from "./components/Institutuions";
import Institution from "./components/Institution";
import Collection from "./components/Collection";
import Object from "./components/Object";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import { myTheme } from "./styles/theme";

const App = () => {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      <Navbar></Navbar>
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
        <Route
          path={`/objects/collection/*`}
          element={<Object></Object>}
        ></Route>
      </Routes>
    </MantineProvider>
  );
};

export default App;
