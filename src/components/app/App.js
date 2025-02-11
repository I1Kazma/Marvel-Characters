import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<MainPage />} exact path="/"></Route>
            <Route element={<ComicsPage />} exact path="/comics"></Route>
            <Route
              element={<SingleComicPage />}
              path="/comics/:comicId"
            ></Route>
            <Route element={<Page404 />} exact path="*"></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
