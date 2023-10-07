/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Outlet } from "react-router-dom";
import Institutuions from "./components/Institutuions";
import Institution from "./components/Institution";
import Collection from "./components/Collection";
import Object from "./components/Object";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import { themeGenerator } from "./styles/theme";
import "./styles/app.css";
import { useContext, useEffect, useReducer, useState } from "react";
import { initialPath, pathReducer } from "./reducer";
import {
  CityProvider,
  PathContext,
  PathProvider,
  SearchProvider,
} from "./context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResults from "./components/SearchResults";

const Layout = () => {
  const [isLightMode, setLightMode] = useState<boolean>(
    localStorage.getItem("isLightMode") === "light" ? true : false
  );
  return (
    <MantineProvider
      theme={themeGenerator(isLightMode)}
      withGlobalStyles
      withNormalizeCSS
    >
      <PathProvider>
        <SearchProvider>
          <CityProvider>
            <Navbar lightMode={isLightMode} setMode={setLightMode}></Navbar>
            <Outlet></Outlet>
          </CityProvider>
        </SearchProvider>
      </PathProvider>
    </MantineProvider>
  );
};

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Institutuions></Institutuions>}></Route>
        <Route
          path={`/institutions/*`}
          element={<Institution></Institution>}
        ></Route>
        <Route
          path={`/institutions/*collections/*`}
          element={<Collection></Collection>}
        ></Route>
        <Route
          path={`/institutions/*collections/*objects/*`}
          element={<Object></Object>}
        ></Route> */}
      </Route>
    </Routes>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: Institutuions },
      { path: `/institutions/*`, Component: Institution },
      { path: `/collections/*`, Component: Collection },
      { path: `/objects/*`, Component: Object },
      { path: `/search/*`, Component: SearchResults },
      { path: "*", Component: Root },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

// export default Root;
