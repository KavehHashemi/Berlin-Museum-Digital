/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Institutuions from "./components/Institutuions";
import Institution from "./components/Institution";
import Collection from "./components/Collection";
import Object from "./components/Object";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./styles/theme";
import { useEffect, useReducer, useState } from "react";
import { initialPath, reducer } from "./reducer";
import { PathProvider } from "./context";

const App = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <MantineProvider
      theme={lightMode ? LightTheme : DarkTheme}
      withGlobalStyles
      withNormalizeCSS
    >
      <PathProvider>
        <Navbar lightMode={lightMode} setMode={setLightMode}></Navbar>
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
      </PathProvider>
    </MantineProvider>
  );
};

export default App;
