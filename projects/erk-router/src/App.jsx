import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
];
function Router({
  router = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    //this is interesting for to make a custom router
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    //that is for added the return on the page
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.addEventListener(NAVIGATION_EVENT, onLocationChange);
      window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);
  const Page = routes.find(({ path }) => path === currentPath)?.Component;
  return Page ? <Page /> : <DefaultComponent />;
}

function App() {
  return (
    <main>
      <Router roote={routes} />
    </main>
  );
}

export default App;
