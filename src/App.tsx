/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Outlet } from "react-router-dom";
import Institutuions from "./components/Institutuions";
import Institution from "./components/Institution";
import Collection from "./components/Collection";
import Object from "./components/Object";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./styles/theme";
import { useContext, useEffect, useReducer, useState } from "react";
import { initialPath, reducer } from "./reducer";
import { PathContext, PathProvider } from "./context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  // const path = useContext(PathContext);
  return (
    <MantineProvider
      theme={lightMode ? LightTheme : DarkTheme}
      withGlobalStyles
      withNormalizeCSS
    >
      <PathProvider>
        <Navbar lightMode={lightMode} setMode={setLightMode}></Navbar>
        <Outlet></Outlet>
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
      { path: "*", Component: Root },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

// export default Root;
