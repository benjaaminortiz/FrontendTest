import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Subsection from "./components/Subsection/Subsection";
import Articles from "./components/Articles/Articles";
import NewArticle from "./components/Articles/NewArticle/NewArticle";
import PreviousArticles from "./components/Articles/PreviousArticles/PreviousArticles";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={[<Main />, <Subsection />, <Articles />]} />
        <Route
          path="/create"
          element={[<NewArticle />, <PreviousArticles />, <Articles/>]}
        />
        <Route path="/create/edit/:id" element={<NewArticle />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
